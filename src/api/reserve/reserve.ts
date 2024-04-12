import { endPoints } from "api";
import axios from "axios";
import { ReserveSchemaDto } from "./reserveSchemaDto";

const listReserveUserId = async (userId: string) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.get(endPoints.reserve.listReserveUserId(userId), config);
    return response.data;
  };
  
  const createReserve = async (reserve: ReserveSchemaDto) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.reserve.insertReserve, reserve, config);
    return response.data;
  };

  export {listReserveUserId, createReserve}