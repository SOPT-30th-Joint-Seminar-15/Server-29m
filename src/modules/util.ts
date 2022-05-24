interface BaseReturnForm<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

const util = {
  success: <T>(status: number, message: string, data?: T): BaseReturnForm<T> => {
    return {
      status,
      success: true,
      message,
      data,
    };
  },
  fail: <T>(status: number, message: string): BaseReturnForm<T> => {
    return {
      status,
      success: false,
      message
    };
  },
};

export default util;
