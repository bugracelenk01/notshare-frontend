import { ADD_FLASH_MESSAGES } from "actions/types";

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGES,
    message
  }
}