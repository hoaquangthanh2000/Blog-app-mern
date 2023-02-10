import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import CommonButton from "../CommonButton/CommonButton";
import CommonInput from "../CommonInput/CommonInput";
import TextAreaCommon from "../TextAreaCommon/TextAreaCommon";

const CreatePostModal: React.FC<{ isShowModal: boolean }> = ({
  isShowModal,
}) => {
  const dispatch = useDispatch();
  let menuRef = useRef<HTMLDivElement>(null);
  const onClickOutSide = (e: any) => {
    console.log("thanh", e.target);
    if (!menuRef.current?.contains(e.target)) {
      dispatch(hideModal());
      console.log("hi", menuRef.current?.contains(e.target));
    }
  };
  const [data, setData] = useState<{
    title: string;
    content: string;
    attachment: string;
  }>({
    title: "",
    content: "",
    attachment: "",
  });
  const onChangeInput = (e:any) => {
    setData({...data,})
  }
  return (
    <div
      onClick={onClickOutSide}
      className={`${
        isShowModal ? "block " : "hidden scale-0"
      }  z-1 flex flex-col fixed top-0 left-0 right-0 bottom-0 m-auto p-6 scale-100 bg-slate-200 opacity-75 rounded-md`}
    >
      <div
        className="bg-slate-900 w-[600px] h-[600px] m-auto p-6"
        ref={menuRef}
      >
        <div className="h-[20%] text-2xl text-white">Create New Post</div>
        <div className="h-[50%]">
          <CommonInput type="text" value={data.title} onChange={onChangeInput}/>
          <TextAreaCommon value={data.content} />
          <CommonInput type="file" value={data.attachment} />
          <CommonButton label={"Create post"} typeBtn={"create"} />
        </div>
      </div>
    </div>
  );
};
export default CreatePostModal;
