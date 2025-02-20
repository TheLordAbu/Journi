import { useForm } from "react-hook-form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
function CreateJourniForm() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <FormRow label="City">
        <Input type="text" id="city" />
      </FormRow>
      <FormRow label="Country">
        <Input type="text" id="country" />
      </FormRow>
      <FormRow label="Describe your time there">
        <textarea
          name=""
          id="description"
          className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded"
        ></textarea>
      </FormRow>
    </>
  );
}

export default CreateJourniForm;
