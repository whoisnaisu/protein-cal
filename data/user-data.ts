import type { IUserData } from "~/types/IUserData";

const data: Array<IUserData> = [
  {
    type: "บุคคลทั่วไป",
    minGram: 0.8,
    maxGram: 1,
  },
  {
    type: "บุคคลที่ออกกำลังกายและต้องการสร้างกล้ามเนื้อ",
    minGram: 1.6,
    maxGram: 2.2,
  },
  {
    type: "บุคคลที่ออกกำลังกายและต้องการลดน้ำหนัก",
    minGram: 1.8,
    maxGram: 2.7,
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
