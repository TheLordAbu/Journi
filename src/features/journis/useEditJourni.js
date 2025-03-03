import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditJourni } from "../../services/apiJournis";
import toast from "react-hot-toast";

export function useEditJourni() {
  const queryClient = useQueryClient();
  const { mutate: editJourni, isLoading: isEditing } = useMutation({
    mutationFn: ({ newJourniData, id }) => createEditJourni(newJourniData, id),
    onSuccess: () => {
      toast.success("Journi successfully edited");
      queryClient.invalidateQueries({ queryKey: ["Journi"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editJourni };
}
