import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node'
import { defer, json, useLoaderData } from '@remix-run/react'
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { AwaitedComponent } from "~/lib/awaited-component";
import { ErrorElement } from "../../error-element";


export const loader = ({ params }: LoaderFunctionArgs) => {

    const categoryData = params.category ? "teste" : null;

      const profiles = {
        "profileCountPerWorkspace": {
          "371304": [
            {
              "id": 763229,
              "socialNetworkProfileId": {
                "facebookId": "427370570459297",
                "facebookUserId": "1044068165685574",
                "value": "427370570459297",
                "formattedId": "427370570459297"
              },
              "username": "Cerrado Code",
              "displayName": "Cerrado Code",
              "profileImage": "https://graph.facebook.com/427370570459297/picture?type=square&return_ssl_resources=1",
              "followersCount": 0,
              "followsCount": 0,
              "itemsSynchronized": true,
              "syncEnabled": true,
              "syncWaitMinuteCount": 15,
              "initialized": false,
              "categoryId": 2255,
              "service": "facebook",
              "workspaceId": 371304,
              "newPageExperience": true,
              "rtuSubscribed": true,
              "rtuSubscribedFields": "feed,messages,message_echoes,messaging_postbacks",
              "timeZone": "America/Sao_Paulo",
              "type": "facebookPage",
              "tokenValid": true,
              "socialNetworkChannel": "FACEBOOK_PAGE",
              "industryId": 2255,
              "uid": "facebook_763229",
              "synchronizable": true,
              "workspaceUid": "workspace_371304"
            }
          ]
        }
      }

      
      return defer({
        profiles,categoryData
      })
};

export default function SidebarAccounts() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);''
  };

  
  return (
    <div className={`flex  flex-col ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white items-center`} style={{ minHeight: "99vh" }}>
        <button onClick={toggleSidebar} className="w-full p-3">
        {isOpen ? <span className="flex justify-between text-2xl ml-3">{"Perfis "}<ChevronLeftIcon   size={30}/></span>: <ChevronRightIcon  size={30}/>}
        </button>
      {isOpen && (
          <div className="mx-2 mt-5 bg-white rounded-md" >
            <Input  placeholder="Search" />
          </div>
      )}
         {/* <AwaitedComponent
      resolve={loaderData.profiles}
      loadingElement={
        <div>
          <div className="w-full sm:flex flex-row flex-wrap justify-start  hidden sm:visible">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="rounded-full h-8 w-16 md:w-20 mx-1 md:mx-2 scale-80 md:transform-none"></Skeleton>
            ))}
          </div>
          <div className="sm:flex flex-row p-2 my-4 justify-between  hidden sm:visible">
            <div className="flex flex-row">
              <Skeleton className="rounded-full h-10 w-10 mr-2 md:mr-5 "></Skeleton>
              <Skeleton className="h-10 w-36 md:w-80 rounded-2xl "></Skeleton>
            </div>
            <Skeleton className="rounded-full h-10 w-20 md:w-28"></Skeleton>
          </div>
          <div className="w-full flex flex-row flex-wrap justify-start pb-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`div-skeleton-${i}`} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-1 mb-6">
                <Skeleton key={`skeleton-${i}`} className="rounded-2xl shadow-md p-10 h-fit">
                  <AspectRatio ratio={10 / 16} className="relative" />
                </Skeleton>
              </div>
            ))}
          </div>
        </div>
      }
      errorElement={<ErrorElement className="container flex flex-col items-center justify-center text-center" />}
    >
      {(profiles) => (<div></div>)}
      </AwaitedComponent> */}


    </div>
  );
}
