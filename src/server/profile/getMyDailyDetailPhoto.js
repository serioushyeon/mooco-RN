import axiosInstance from '../axios/axiosInstance';

// 6-4. 마이페이지 나의 일상 디테일 사진 조회(페이지네이션)
const getMyDailyDetailPhoto = async (year, month, page = 0, size = 10) => {

  try {
    const response = await axiosInstance.get(
      `/api/v1/users/monthly-barcode/details/image`,
      {
        params: {
          year: year,
          month: month,
          page,
          size,
        },
      }
    );
    // console.log("일상 디테일 사진 조회! : ", response.data);
    return response.data;
  } catch (error) {
    console.error("일상 디테일 사진 조회 에러 ", error);
    return [];
  }
};

export default getMyDailyDetailPhoto;
