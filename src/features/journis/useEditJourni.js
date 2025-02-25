import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditJourni } from "../../services/apiJournis";

export function useEditJourni() {
  const queryClient = useQueryClient();
  const { mutate: editJourni, isLoading: isEditing } = useMutation({
    mutationFn: ({ newJourniData, id }) => createEditJourni(newJourniData, id),
    onSuccess: () => {
      toast.success("cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["journis"] });
    },
    onError: (err) => toast.errorr(err.message),
  });
  return { isEditing, editJourni };
}
