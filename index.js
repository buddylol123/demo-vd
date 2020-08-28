const request = require('request')

 const geocode = (address,callback) => {
      const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYnVkZHlsb2wxMjMiLCJhIjoiY2tlYXVrNG5qMDJoZDJ0cDhzaTRzajZvayJ9.UKfSGqhD-9Q7L3-XzA57fA'
      request({url:url,json:true},(error,response)=>{
         if(error)
         {
            callback('khong the ket noi',undefined)
         }else if( response.body.features.length ===0 )
         callback('khong tim thay dia diem',undefined)
         else
         callback(undefined,{
            latitude:response.body.features[0].center[0],
            longtitude:response.body.features[0].center[1],
            location:response.body.features[0].place_name
         })
      })
   }
   geocode ('Vietnam',(error,data)=>{
      console.log('Error',error)
      console.log('data',data  )

   })

