import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJourni as deleteJourniApi } from "../../services/apiJournis";
import toast from "react-hot-toast";

export function useDeleteJourni() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteJourni } = useMutation({
    mutationFn: deleteJourniApi,
    onSuccess: () => {
      toast.success("Journi has been deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["Journis"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteJourni };
}
