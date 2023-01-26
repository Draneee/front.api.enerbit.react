import { React, useEffect, useState } from "react";
import axios from "axios";

export const useAdminInventor = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const [initialData, setInitialData] = useState([]);
  const [content, setContent] = useState("Preview");
  const [showModal, setShowModal] = useState(false);
  const [dataPayload, setDataPayload] = useState({});
  const client = axios.create({
    baseURL: "https://ops.enerbit.dev/learning/api/v1/meters",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await client.get(
          `?page=${currentPage}&size=${itemsPerPage}${
            searchTerm ? `&serial=${searchTerm}` : ""
          }`
        );
        setItems(response.data.items);
        setInitialData(response.data.items);
        setTotalPages(response.data.pages);
      } catch (err) {
        throw err;
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setItems(
        initialData.filter((item) =>
          item.serial.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setItems(initialData);
    }
  }, [searchTerm, initialData]);

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      await client.delete(`/${id}`);
    } catch (error) {
      throw error;
    } finally {
      setIsDeleting(false);
      setIsDeleted(true);
    }
  };

  const handleEditMeter = async (id, item) => {
    const itemPut = {
      connection_type: item?.connection_type,
      storage_system: item?.storage_system,
      condition: item?.condition,
      owner: item?.owner,
      serial: item?.serial,
      location: item?.location,
      purchase: item?.purchase,
      i_max: item?.i_max,
      i_b: item?.i_b,
      i_n: item?.i_n,
      manufacturer: item?.manufacturer,
      seals: item?.seals,
    };
    try {
      await client.patch(`/${id}`, itemPut);
    } catch (error) {
      throw error;
    } finally {
      setIsEdited(true);
    }
    setItems([...items, itemPut]);
  };

  const handleAddItem = async (item) => {
    const itemPost = {
      connection_type: item?.connection_type,
      storage_system: item?.storage_system,
      condition: item?.condition,
      owner: item?.owner,
      serial: item?.serial,
      location: item?.location,
      purchase: item?.purchase,
      i_max: item?.i_max,
      i_b: item?.i_b,
      i_n: item?.i_n,
      manufacturer: item?.manufacturer,
      seals: item?.seals,
    };
    await client.post(``, itemPost);
    try {
    } catch (error) {
      throw error;
    }
  };

  function handleChangeItemsPerPage(newItemsPerPage) {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(Math.floor((currentPage * itemsPerPage) / newItemsPerPage));
  }

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearchTerm("");
      setItems(initialData);
    } else {
      setSearchTerm(e.target.value);
    }
  };
  const statusOnClick = () => {
    setShowModal(true);
  };
  const viewOnClick = () => {
    setContent("Preview");
  };
  const editOnClick = () => {
    setContent("Edit");
  };
  const deleteOnClick = () => {
    setContent("Delete");
  };
  const AddProductOnClick = () => {
    setContent("Add Product");
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const OnChangeNashe = (e) => {
    setDataPayload({ ...dataPayload, [e.target.name]: e.target.value });
  };

  return {
    items,
    isLoading,
    itemsPerPage,
    searchValue,
    totalPages,
    currentPage,
    searchTerm,
    isDeleting,
    content,
    showModal,
    error,
    dataPayload,
    isDeleted,
    isEdited,
    OnChangeNashe,
    statusOnClick,
    handleDelete,
    handleChangeItemsPerPage,
    handleNextPage,
    handlePreviousPage,
    handleSearch,
    handleAddItem,
    handleEditMeter,
    viewOnClick,
    editOnClick,
    deleteOnClick,
    AddProductOnClick,
    closeModal,
  };
};
