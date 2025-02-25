import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createEditJourni } from "../../services/apiJournis";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import Row from "../../UI/Row";
import FileInput from "../../UI/FIleInput";
import Button from "../../UI/Button";
import Textarea from "../../UI/Textarea";
import toast from "react-hot-toast";

function CreateJourniForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditJourni,
    onSuccess: () => {
      toast.success("New Journi created successfully");
      queryClient.invalidateQueries({ queryKey: ["Journis"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // console.log(data);
    mutate({ ...data, thumbnail: data.thumbnail[0], images: data.images });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="City" error={errors?.city?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="city"
          {...register("city", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Country" error={errors?.country?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="country"
          {...register("country", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Describe your time there"
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isCreating}
          name=""
          id="description"
          className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded"
          {...register("description", {
            required: "This field is required",
          })}
        ></Textarea>
      </FormRow>
      <Row type="2-cols">
        <FormRow label="Arrival date" error={errors?.city?.message}>
          <Input
            disabled={isCreating}
            type="date"
            id="startDate"
            {...register("startDate", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Leaving date" error={errors?.city?.message}>
          <Input
            disabled={isCreating}
            type="date"
            id="endDate"
            {...register("endDate", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Row>
      <Row type="2-cols">
        <FormRow label="Thumbnail">
          <FileInput
            id="image"
            accept="image/*"
            varation="thumbnail"
            {...register("thumbnail", {
              required: "This field is required",
            })}
          />
        </FormRow>
        {/* <FormRow label="Upload Photos From Your Trip">
          <FileInput
            id="images"
            accept="image/*"
            multiple
            {...register("images", {
              required: "This field is required",
            })}
          />
        </FormRow> */}
      </Row>
      <Row type="end">
        <button
          type="reset"
          className="px-4 py-2 rounded bg-white text-gray-800 cursor-pointer border border-gray-300/50 font-semibold"
        >
          Cancel
        </button>
        <Button disabled={isCreating}>Add Journi</Button>
      </Row>
    </form>
  );
}

export default CreateJourniForm;
