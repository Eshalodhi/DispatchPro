export async function POST(req) {
  try {
    const data = await req.json()

    console.log("Contact Form Data:", data)

    return Response.json({
      success: true,
      message: "Form submitted successfully!"
    })
  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong"
    })
  }
}