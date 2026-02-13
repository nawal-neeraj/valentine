async function uploadBase64ToCloudinary(base64) {
  const url = "https://api.cloudinary.com/v1_1/dgy45hi0w/image/upload";
  const formData = new FormData();

  formData.append("file", base64);
  formData.append("upload_preset", "valentine_unsigned");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Cloudinary URL:", data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
  }
}

export default uploadBase64ToCloudinary;
