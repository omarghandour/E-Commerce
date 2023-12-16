import { redirect } from "next/navigation";

export async function POST(request: Request) {
const data = await request.json();
// const response = await this.client.post (request => request && request.successful === true ? JSON.deserialize( JSON.stringify( data ) ) : data ) ; // TODO
console.log(data);
if(data.object.success === true){
            redirect('/success');
}
return  new Response(JSON.stringify({data: data}))
}
