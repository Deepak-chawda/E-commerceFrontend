import React,{useState} from "react";
import Modal from "react-modal";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import {  toast } from 'react-toastify';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function DeleteProductAdmin({itemId,getProductsApi ,itemimage}) {
  //  state for loader
  const [Isloader, setIsloader] = useState(false);
  // console.log("item cloudnary=",itemimage.cloudinary_id)
  const deleteProductsApis = async (itemId) => {
    // console.log("itemId=",itemId)
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      setIsloader(true);
      const response = await axios.delete(
        `https://apple-e-commerce.herokuapp.com/api/delete/product?_id=${itemId}&imgId=${itemimage.cloudinary_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("response", response);
      setIsloader(false);
      closeModal();
      getProductsApi();
      toast.success(`${response.data.msg}✔️`, {
        theme: "colored",
        icon: "🚀"
      });

      // alert(response.data.msg)
    } catch (error) {
      console.log("error", error.response);
      setIsloader(false);
      // alert(error.response.data.error);
      toast.success(`${error.response.data.msg}'❌'`, {
        theme: "colored",
      });
    }
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <a
        className="text-lg text-danger "
        data-tip="Detele"
        href="#/"
        style={{ cursor: "pointer" }}
        onClick={openModal}
      >
        <ReactTooltip place="top" type="dark" effect="solid" />
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="trash-alt"
          className="svg-inline--fa fa-trash-alt fa-w-14 "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
          ></path>
        </svg>
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" text-center">
          <button
            className="text-danger border-0  bg-white"
          >
           <i className="icon-info-sign icon-4x"></i>
          </button>

          <h4 className="modal-title w-100">Are you sure?</h4>
          <p>
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
          <button type="button" className="btn btn-secondary m-2" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" className="btn btn-danger m-2"
          onClick={()=>{
            deleteProductsApis(itemId) 
            
          }} 
          disabled={Isloader}
           >
          
            {Isloader ? (
                      <div
                        className="  spinner-border spinner-border-sm  mx-4"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ): "Delete"}
          </button>
        </div>
      </Modal>
    </>
  );
}
export default DeleteProductAdmin;
