const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

export type FormDataType = {
  fullName?: string | undefined;
  email: string;
  phone?: string | undefined;
  message?: string | undefined;
};

const usePostData = async (formData: FormDataType) => {
  try {
    const res = await fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to POST data");
  } finally {
    console.log("Success");
  }
};

export default usePostData;
