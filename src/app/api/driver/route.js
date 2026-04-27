export async function POST(req) {
  try {
    const data = await req.json()

    console.log("Driver Form Data:", data)

    return Response.json({
      success: true,
      message: "Driver registered successfully!"
    })
  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong"
    })
  }
}