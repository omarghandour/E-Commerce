import React, { useEffect, useState } from 'react'

const NotReq = () => {
                  const [dd , setDd] = useState<boolean>();

          function notifyMe() {
                    if (!("Notification" in window)) {
                      // Check if the browser supports notifications
                      alert("This browser does not support desktop notification");
                    } else if (Notification.permission === "granted") {
                              setDd(true);
                      // Check whether notification permissions have already been granted;
                      // if so, create a notification
                      const notification = new Notification("Hi there!");
                      // …
                    } else if (Notification.permission !== "denied") {
                      // We need to ask the user for permission
                      setDd(true);
                      Notification.requestPermission().then((permission) => {
                        // If the user accepts, let's create a notification
                        if (permission === "granted") {
                          const notification = new Notification("Hi there!");
                          // …
                        }
                      });
                    }
                  
                    // At last, if the user has denied notifications, and you
                    // want to be respectful there is no need to bother them anymore.
                  }
             useEffect(()=>{
notifyMe();
             },[dd])
                  
                  
  return (
    <div><button style={dd ? {display:"none"} : {display:"block"} } onClick={notifyMe}>Eneable Notifications!</button>
    </div>
  )
}

export default NotReq