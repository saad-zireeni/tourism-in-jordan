const Tours = () => {

    const places = [
        {
            id: 1,
            name: "Petra",
            info: "asdkjasdkjadskjalkdsjaksdjaksd",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/200px-Treasury_petra_crop.jpeg",
            price: 10

        },
        {
            id: 2,
            name: "Zarqa",
            info: "asdkjasdkjadskjalkdsjaksdjaksd",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/JHR_Az_Zarqa.jpg/200px-JHR_Az_Zarqa.jpg?20070329085135",
            price: 10

        },
        {
            id: 3,
            name: "Aqaba",
            info: "asdkjasdkjadskjalkdsjaksdjaksd",
            image: "https://international.visitjordan.com/uploads/Blogs/0a99c141-f42f-4146-a999-c0263b08b32d.jpg",
            price: 10

        },
        {
            id: 4,
            name: "Petra",
            info: "asdkjasdkjadskjalkdsjaksdjaksd",
            image: "https://petralover.com/sites/default/files/2019-01/7.jpg",
            price: 10

        },
    ]

    return ( 
        <div className='row text-center'>
        <div className='card-container d-flex justify-content-center flex-wrap'>
          {places.map((place) => (
            <div className='card mb-4 mx-2' key={place.id}>
              <div className='card-header'>{place.name}</div>
              <div className='card-body'>
                <img src={place.image} alt={place.name} className='card-img-top' style={{ width: '200px', height: '200px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
     );
}
 
export default Tours;