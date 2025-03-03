/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useCreateJourni } from "./useCreateCabin";
import { useEditJourni } from "./useEditJourni";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import Row from "../../UI/Row";
import FileInput from "../../UI/FIleInput";
import Button from "../../UI/Button";
import Textarea from "../../UI/Textarea";

function CreateJourniForm({ journiToEdit = {}, onCloseModal }) {
  const { id: editId, editValues } = journiToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { isCreating, createJourni } = useCreateJourni();
  const { isEditing, editJourni } = useEditJourni();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    // prettier-ignore
    const thumbnail = typeof data.thumbnail === "string" ? data.thumbnail : data.thumbnail[0];
    const images = typeof data.images === "string" ? data.images : data.images;
    console.log(data);
    if (isEditSession)
      editJourni(
        { newJourniData: { ...data, thumbnail, images }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createJourni(
        { ...data, thumbnail: data?.thumbnail[0], images: data?.images },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="City" error={errors?.city?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="city"
          {...register("city", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Country" error={errors?.country?.message}>
        <Input
          disabled={isWorking}
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
          disabled={isWorking}
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
            disabled={isWorking}
            type="date"
            id="startDate"
            {...register("startDate", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Leaving date" error={errors?.city?.message}>
          <Input
            disabled={isWorking}
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
              required: isEditSession ? false : "This field is required",
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
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Journi" : " Add Journi"}
        </Button>
      </Row>
    </form>
  );
}

export default CreateJourniForm;
