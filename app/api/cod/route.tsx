
import Cod from "@/app/models/cod";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req: Request){
const {fullname, email, number, cd, address1, address2} = await req.json();
const names = cd.map((obj: { name: string; }) => obj.name).filter((name: string) => name !== undefined);
const prices = cd.map((obj: { price: number; }) => obj.price).filter((price: number) => price !== undefined);
// const colors = cd.map((obj: { colors: string; }) => obj.colors).filter((colors: string) => colors !== undefined);
const sizes = cd.map((obj: { product_data: string }) => obj.product_data).filter((product_data: string) => product_data !== undefined);
const quantity = cd.map((obj: { quantity: number; }) => obj.quantity).filter((quantity: number) => quantity !== undefined);
// console.log(cd);
const size = sizes[0].size
const color = sizes[0].color
// const names = cd.map((obj: any) => obj).filter((obj: any) => obj !== undefined);
console.log(size);

// console.log(fullname, email, number, names, prices, colors, quantity, sizes, address1, address2);
//     const cartDetails = await req.json()
// console.log(cartDetails);

try {
     await connectDB();
     await Cod.create({fullname, email, number, names, prices, color, quantity, size, address1, address2}) 
     // console.log(fullname, email, number, names, prices, colors, quantity);
         
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


return NextResponse.json({msg: ['sss']})

}