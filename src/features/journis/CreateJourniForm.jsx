import { useForm } from "react-hook-form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import Row from "../../UI/Row";
import FileInput from "../../UI/FIleInput";
import Button from "../../UI/Button";
import Textarea from "../../UI/Textarea";
function CreateJourniForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="City">
        <Input type="text" id="city" {...register("city")} />
      </FormRow>
      <FormRow label="Country">
        <Input type="text" id="country" {...register("country")} />
      </FormRow>
      <FormRow label="Describe your time there">
        <Textarea
          name=""
          id="description"
          className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded"
          {...register("description")}
        ></Textarea>
      </FormRow>
      <Row type="2-cols">
        <FormRow label="Arrival date">
          <Input type="date" id="startDate" {...register("startDate")} />
        </FormRow>
        <FormRow label="Leaving date">
          <Input type="date" id="endDate" {...register("endDate")} />
        </FormRow>
      </Row>
      <FormRow label="Thumbnail">
        <FileInput id="image" accept="image/*" type="thumbnail" />
      </FormRow>
      <FormRow label="Upload Photos From Your Trip">
        <FileInput id="image" accept="image/*" />
      </FormRow>
      <Row type="end">
        <button
          type="reset"
          className="px-4 py-2 rounded bg-white text-gray-800 cursor-pointer border border-gray-300/50 font-semibold"
        >
          Cancel
        </button>
        <Button>Add Journi</Button>
      </Row>
    </form>
  );
}

export default CreateJourniForm;
