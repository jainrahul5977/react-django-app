import {useEffect ,useState} from "react";
import {Button , Modal} from "react-bootstrap"
// function RingFinger(props) {
//     const [show ,setShow] =useState()
//     const [img , setImg] =useState()
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const { id, num } = props;

//   const fetchImage = async (id, num) => {
//     const url = `http://127.0.0.1:8000/product/?id=${id}&num=${num}`;
//     const image = await fetch(url).then((response) => {
//       return response.json();
//     });
//     console.log(image);
//     setImg(image)
//     handleShow()
//   };

// //   useEffect(() => {
// //     ;
// //   }, []);

//   return (
//     <>
//     {fetchImage(id, num)}
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Virtual try On</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img src={img} alt="wait a second" />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
          
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

function RingFinger(props) {
    const {imgs} =props;
    return(<>
    <img src={imgs} alt ="Oops Something Went Wrong !!!" style={{width:"300", height:"300"}} />
    </>
    )
}
export default RingFinger;
