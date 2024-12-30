'use client'

import { Alert, Button, CustomPagination, OutlineButton, Table, Radio, Checkbox, Select, MonthSelector, WithoutFormInput } from "@/components";

import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";


export default function Home() {


  const [preview, setPreview] = useState<any>(null);


  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];

    if (!file) {
      enqueueSnackbar('No file selected', {
        variant: "error",
        autoHideDuration: 5000,
      });
      return;
    }


    // Validate file type (JPEG/PNG only)
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      enqueueSnackbar('Invalid file type. Please upload a JPEG or PNG image.', {
        variant: 'error',
        autoHideDuration: 5000,
      });
      return;
    }

    // Validate file size (max 3MB)
    const maxSizeInMB = 3;
    if (file.size > maxSizeInMB * 1024 * 1024) {
      enqueueSnackbar('File size exceeds 3MB. Please upload a smaller file.', {
        variant: "error",
        autoHideDuration: 5000,
      });
      return;
    }

    // Create a preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string); // Update the preview
    };
    reader.readAsDataURL(file);
  };




  return (
    <div className="p-4 bg-[#eeeeee9c]">


      <h1>Alerts</h1>

      <div className="max-w-[500px] py-2">


        <Alert
          message="A simple danger alert—check it out!"
          type="error"
        />


        <Alert
          message="A simple success alert—check it out!"
          type="success"
        />

        <Alert
          message="A simple warning alert—check it out!"
          type="warning"
        />



      </div>


      <h1 className="mt-4">Buttons</h1>

      <div className="max-w-[800px] py-2 flex gap-2 flex-wrap">


        <Button variant="primary">
          Primary
        </Button>

        <Button variant="success">
          Success
        </Button>

        <Button variant="danger">
          Danger
        </Button>

        <Button variant="link">
          Link
        </Button>

      </div>



      <h1 className="mt-4">Outlined Buttons</h1>

      <div className="max-w-[800px] py-2 flex gap-2 flex-wrap">


        <OutlineButton variant="primary">
          Primary
        </OutlineButton>

        <OutlineButton variant="success">
          Success
        </OutlineButton>

        <OutlineButton variant="danger">
          Danger
        </OutlineButton>


      </div>




      <h1 className="mt-4">Pagination Working with icons</h1>



      <div className="py-2">
        <CustomPagination
          total={500}
          current={3}
          pageSize={10}
        />

      </div>



      <h1 className="mt-4">Pagination Disabled and Active states</h1>


      <div className="py-2">
        <CustomPagination
          total={500}
          current={1}
          pageSize={10}
        />
      </div>




      <h1 className="mt-4">Headings</h1>


      <div className="py-2">
        <h1>h1. heading</h1>
        <h2>h2. heading</h2>
        <h3>h3. heading</h3>
      </div>



      <h1 className="mt-4">Table</h1>

      <div className="py-2">

        <Table
          headersData={[
            {
              title: 'Image',
              dataIndex: 'image',
              key: 'image',
            },
            {
              title: '1st',
              dataIndex: '1st',
              key: '1st',
            },
            {
              title: '2nd',
              dataIndex: '2nd',
              key: '2nd',
            },

            {
              title: '3rd',
              dataIndex: '3rd',
              key: '3rd',
            },

            {
              title: '4th',
              dataIndex: '4th',
              key: '4th',
            },

            {
              title: '5th',
              dataIndex: '5th',
              key: '5th',
            },

            {
              title: '6th',
              dataIndex: '6th',
              key: '6th',
            },

            {
              title: '7th',
              dataIndex: '7th',
              key: '7th',
            },

            {
              title: '8th',
              dataIndex: '8th',
              key: '8th',
            },


          ]}

          tableData={[
            {
              key: '1',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-success px-3 py-[3px] text-xs rounded text-white">Completed</button>,
              '8th': 'Date',
            },
            {
              key: '2',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-yellow-500 px-3 py-[3px] text-xs rounded ">In progress</button>,
              '8th': 'Date',
            },
            {
              key: '3',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-orange-500 px-3 py-[3px] text-xs rounded ">Received</button>,
              '8th': 'Date',
            },
            {
              key: '4',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-yellow-500 px-3 py-[3px] text-xs rounded ">In progress</button>,
              '8th': 'Date',
            },
            {
              key: '5',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-orange-500 px-3 py-[3px] text-xs rounded ">Received</button>,
              '8th': 'Date',
            },
            {
              key: '6',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-success px-3 py-[3px] text-xs rounded text-white">Completed</button>,
              '8th': 'Date',
            },
            {
              key: '7',
              image: <Image src="/image.src" alt="&nbsp;" width={20} height={20} />,
              '1st': 'Mark',
              '2nd': 'Otto',
              '3rd': 'Text',
              '4th': 'Second',
              '5th': 'Text',
              '6th': 'N/A',
              '7th': <button className="bg-danger px-3 py-[3px] text-xs rounded text-white">Declined</button>,
              '8th': '20.25.2024',
            },
          ]}
        />

      </div>


      <div className="flex items-center gap-4 justify-between">

        <div className="w-[300px]">
          <h1 className="mt-4">Select</h1>


          <div className="py-2">
            <label className="block">Label title goes here</label>
            <Select
              placeholder="Select Option"
              data={[
                {
                  value: 'Option 1',
                  label: 'Option 1'
                },
                {
                  value: 'Option 2',
                  label: 'Option 2'
                },
                {
                  value: 'Option 3',
                  label: 'Option 3'
                }
              ]}
            />
          </div>

        </div>

        <div>
          <h1 className="mt-4">Radio</h1>

          <div className="py-2">

            <Radio data={[
              {
                label: 'active radio',
                value: 'active radio',
              },
              {
                label: 'Radio option',
                value: 'Radio option',
              },
              {
                label: 'Radio option',
                value: 'Radio option',
              }
            ]} />


          </div>
        </div>



        <div>

          <h1 className="mt-4">Checkbox</h1>

          <div className="py-2">

            <Checkbox title="Active check box" />

            <Checkbox title="Check box" />

            <Checkbox title="Check box" />


          </div>
        </div>




      </div>



      <h1 className="mt-4">Category</h1>


      <div className="py-2 w-[500px] bg-white p-4">


        <div className="pb-2">
          <WithoutFormInput
            colorPrimary
            type='text'
            label='Name'
            placeholder='Name'
          />
          <span className="opacity-50 text-xs">The name is how it appears on your site</span>
        </div>


        <div className="pb-2">
          <WithoutFormInput
            colorPrimary
            type='text'
            label='Slug'
            placeholder='Slug'
          />
          <span className="opacity-50 text-xs max-w-[400px] block">The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers and hyphens.</span>
        </div>


        <div className="pb-2">
          <label className="block">Parent Category</label>
          <Select
            placeholder="Select Option"
            data={[
              {
                value: 'Option 1',
                label: 'Option 1'
              },
              {
                value: 'Option 2',
                label: 'Option 2'
              },
              {
                value: 'Option 3',
                label: 'Option 3'
              }
            ]}
          />
          <span className="opacity-50 text-xs max-w-[400px] block">Assign a parent term to establish a hierarchical structure.</span>
        </div>


        <div className="pb-2">
          <label className="block">Parent Category</label>




          <label htmlFor="profile-image-upload" className="cursor-pointer">



            <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-primary underline">

              {preview ? (
                <Image
                  src={preview}
                  alt="img-placeholder"
                  width={80}
                  height={80}
                  className="w-[60px] h-[60px]"
                />
              ) : (
                <div className="w-[60px] h-[60px] bg-gray-300 rounded-lg"></div>
              )}
              Upload Picture
            </div>
          </label>


          <input
            id="profile-image-upload"
            type="file"
            accept="image/jpeg,image/png"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

        </div>

      </div>

      <div className="py-4">
        <OutlineButton variant="primary">
          Add
        </OutlineButton>
      </div>




      <h1 className="mt-4">Year check uncheck component</h1>

      <div className="py-2 w-[500px]">

        <label className="block text-sm font-medium text-gray-700 mb-2">Label goes here</label>

        <div className="border border-gray-400 p-3">
          <MonthSelector />
        </div>


        <div className="border border-gray-400 p-3 mt-4">
          <MonthSelector />
        </div>

      </div>







      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}
