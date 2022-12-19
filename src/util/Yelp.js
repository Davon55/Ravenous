const apiKey = '7wnkElCk9E9z-Z-bK6-I0lz3QTv4Mx7PX-Ip9aCPfBKVZO1asqxqF76jvzqQ-EGkGiStaLGJFL7jeDUMxg3gOgKfPaKF82IBJd5Db7nSBZMm0WjGPUDmWvfLMceWY3Yx';

 const Yelp ={
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                     Authorization: `Bearer ${apiKey}`
                    }
    }).then(response => {
      return  response.json();
    }).then(jsonResponse => {
        if(jsonResponse.businesses){
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSRC: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipcode: business.location.zipcode,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.reviewCount,
          }));
        }
    });
  }
};
export default Yelp;