export async function POST(req) {
    let res = {message: 'Invalid Request'}
    const data = await req.formData()
    const fullName = data.get('Full Name')
    const email = data.get('email')
    const address1 = data.get('address1')
    const address2 = data.get('address 2')
    const city = data.get('city')
    const state = data.get('state')
    const zipcode = data.get('zipcode')
    const skills = data.get('skills')
    const preferences = data.get('preferences')
    const availability = data.get('availability')
  
  if (!fullName || !email|| !address1 || !city || ! state || !zipcode || !availability){
    res = {message: "Please fill out all of the required fields"}
  } else{
    res = {message: 'Saved Successfully!'}
  }
  return Response.json(res)
}