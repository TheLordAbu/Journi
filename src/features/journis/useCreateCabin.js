import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditJourni } from "../../services/apiJournis";
import toast from "react-hot-toast";

export function useCreateJourni() {
  const queryClient = useQueryClient();
  const { mutate: createJourni, isLoading: isCreating } = useMutation({
    mutationFn: createEditJourni,
    onSuccess: () => {
      toast.success("New Journi created successfully");
      queryClient.invalidateQueries({ queryKey: ["Journis"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createJourni };
}
