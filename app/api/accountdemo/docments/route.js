
import { writeFile  } from 'fs/promises';
import fs from 'fs';
import { NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
export async function POST(req) {
 try{
    await connect();
    const file= await req.formData();
 
    const file1=file.get('file1');
    const file2=file.get('file2');
    const type=file.get('type');
    const email=file.get('email');
    // const fileData = await req.json();
    // console.log(fileData);
    // const {email,acctype,file1,file2}=fileData;
    // console.log("Hiranmoy");

    // Validate that at least one file is uploaded.
    // if (!file1) {
    //   console.log('file empy')
    //   return NextResponse.json(
    //     'No files were uploaded',
    //     { status: 403 }
    //   );
    // }   

    const byteData1 = await file1.arrayBuffer();
 
    const Buffer1 = Buffer.from(byteData1);
    const byteData2 =await file2.arrayBuffer();
    const Buffer2 = Buffer.from(byteData2);
    
  
    // const newpath=`./putlic/ducuments/hiranmoy.jpg`
    //   const file1Exist1 =await fileExists(path1);
    //   const file1Exist2 =await fileExists(path2);
      
      const fileExtension1 = file1.name.match(/\.[0-9a-z]+$/i)[0];
      const fileExtension2 = file2.name.match(/\.[0-9a-z]+$/i)[0];
      const Aadhar =`${email}Aadhar${fileExtension1}`;
      const Pan =`${email}Pan${fileExtension2}`;
      const path1 = `./public/documents/${Aadhar}`;
      const path2 = `./public/documents/${Pan}`;
    // Write the files to disk.
    await writeFile(path1, Buffer1);
    await writeFile(path2, Buffer2);

    // Send a response to the client indicating that the files were successfully uploaded.
    return  NextResponse.json({
      message: "User created successfully",
      success: true,
  })  
} catch (error) {
  return NextResponse.json({error: error.message}, {status: 500})

}
}

async function fileExists(path) {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}