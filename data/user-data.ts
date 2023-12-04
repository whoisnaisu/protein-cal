import type { IUserData } from "~/types/IUserData";

const data: Array<IUserData> = [
  {
    type: "บุคคลทั่วไปที่ไม่ได้ออกกำลังกาย",
    minGram: 0.8,
    maxGram: 1,
  },
  {
    type: "บุคคลที่ออกกำลังกายเพื่อให้สุขภาพแข็งแรง (ออกกำลังกายเบา ๆ)",
    minGram: 1,
    maxGram: 1.2,
  },
  {
    type: "บุคคลที่ออกกำลังกายค่อนข้างหนัก (ต้องการเพิ่มกล้ามเนื้อ)",
    minGram: 1.5,
    maxGram: 3,
  },
  {
    type: "คุณแม่ที่กำลังตั้งครรภ์",
    minGram: 1.1,
    maxGram: 1.3,
  },
  {
    type: "กลุ่มผู้ป่วยโรคไตเรื้อรัง",
    minGram: 0.6,
    maxGram: 0.8,
  },
];

export default data;
