import React, { createContext, ReactNode, useState } from "react";

interface SubscriptionProviderProps {
  children: ReactNode;
}

interface SubscriptionData {
  isOpen: boolean;
  isAssine: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleAssine: () => void;
}

export const Subscription = createContext({} as SubscriptionData);


export function SubscriptionProvider({ children }: SubscriptionProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAssine, setIsAssnine] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleAssine = () => {
    setIsAssnine(true)
  }

  const contextValue = {
    isOpen,
    isAssine,
    handleOpenModal,
    handleCloseModal,
    handleAssine
  }

  return (
    <Subscription.Provider value={contextValue}>
      {children}
    </Subscription.Provider>
  )
}

