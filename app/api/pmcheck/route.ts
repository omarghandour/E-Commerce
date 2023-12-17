import Paymob from "@/app/models/paymob";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
const data = await request.json();
// const response = await this.client.post (request => request && request.successful === true ? JSON.deserialize( JSON.stringify( data ) ) : data ) ; // TODO
// console.log(data);
const transaction_id = data.obj.id
const amount = data.obj.order.amount_cents
const createdAt = data.obj.order.created_at
const cFirstName = data.obj.order.shipping_data.first_name
const cLastName = data.obj.order.shipping_data.last_name
const cEmail = data.obj.order.shipping_data.email
const cPhone = data.obj.order.shipping_data.phone_number
const ordeId = data.obj.order.shipping_data.orde_id
const status = data.obj.success

try {
  await connectDB();
  // console.log({status, transaction_id, amount, createdAt, cFirstName, cLastName, cEmail, cPhone, ordeId});

  await Paymob.create({status, transaction_id, amount, createdAt, cFirstName, cLastName, cEmail, cPhone, ordeId})
  if(status === true){
    redirect('/success');
}
  return NextResponse.json({
       msg: [201], success: true
  })
} catch (error) {
       if(error instanceof mongoose.Error.ValidationError){
                 let errorList =[]
                 for (let e in error.errors){
                           errorList.push(error.errors[e].message)
                 }
                 return NextResponse.json({msg: errorList})
       }else{
                 return NextResponse.json(error)
       }
}
// return new Response(JSON.stringify(data));
}


