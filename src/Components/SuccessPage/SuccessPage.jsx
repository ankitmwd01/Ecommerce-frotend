import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const SuccessPage = () => {
  const Navigate = useNavigate();
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const id = param.id;
  useEffect(() => {
    CreateOrder();
  }, []);
  const CreateOrder = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_ENDPOINT}/v1/user/payment/success/${id}`
      );
      setLoading(false);
    } catch (e) {
      toast.error(e?.message);
    }
  };
  return <>{Navigate("/successPage")};</>;
};

export default SuccessPage;
