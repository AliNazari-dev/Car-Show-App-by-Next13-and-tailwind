import { CarProps } from "@/types";
import React from "react";

interface CardDetailsProps {
  isOpen: boolean;
  car: CarProps;
  closeModal: () => void;
}

const CardDetails = ({ isOpen, car, closeModal }: CardDetailsProps) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
