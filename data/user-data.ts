import type { IUserData } from "~/types/IUserData";

const data: Array<IUserData> = [
  {
    type: "บุคคลทั่วไปที่ไม่ได้ออกกำลังกาย",
    gram: 1,
  },
  {
    type: "บุคคลที่ออกกำลังกายเพื่อให้สุขภาพแข็งแรง (ออกกำลังกายเบา ๆ)",

    gram: 1.2,
  },
  {
    type: "บุคคลที่ออกกำลังกายค่อนข้างหนัก (ต้องการเพิ่มกล้ามเนื้อ)",
    gram: 3,
  },
  {
    type: "คุณแม่ที่กำลังตั้งครรภ์",
    gram: 1.3,
  },
  {
    type: "กลุ่มผู้ป่วยโรคไตเรื้อรัง",
    gram: 0.8,
  },
];

export default data;
