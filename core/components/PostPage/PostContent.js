import React from "react";
import styled from "styled-components";

import SubHeading from "./RenderedComponents/SubHeading";
import Attachment from "./RenderedComponents/Attachment";
import Paragraph from "./RenderedComponents/Paragraph";
import Slideshow from "./RenderedComponents/Slideshow";
import PostContentWrapper from "./PostContentWrapper";
import Heading from "./RenderedComponents/Heading";
import Image from "./RenderedComponents/Image";
import Table from "./RenderedComponents/Table";
import List from "./RenderedComponents/List";

/**
 * @name PostContent
 * @desc Display post content
 */
class PostContent extends React.Component {
  render() {
    return (
      <PostContentWrapper>
        <Heading>โครงสร้างของอตอม</Heading>
        <SubHeading>ลักษณะของอตอมในอดีต</SubHeading>
        <Paragraph>
          แนวความคิดของ ลูซิพปุส (Leucippus) และดิโมคริตุส (Democritus) ยังคง
          แพรหลายอยู ห  ลายสิบป สสารทั้งหลายประกอบดวยอนุภาคที่เล็กที่สุด
          จนกระทั่งตอมา
          วิทยาศาสตรไดเจริญกาวหนาขึ้นและเกิดทฤษฎีอะตอมขึ้นมาในป ค.ศ.1808
          จากแนวความคิด ของจอหน ดาลตัน ผูเสนอจุดเริ่มตนของเคมียุคใหม
          สมมติฐานเกี ย ่ วกับธรรมชาติของสสารท ดาลตัน ไดเสนอคือแบบจําลองอะตอม
          เปนที่ยอมรับและสนับสนุนจากนักวิทยาศาสตรในสมัย นั้น
          โดยทฤษฎีอะตอมของดาลตันไดกลาวไววา 1. สสารทุกชนิดประกอบดวยอะตอม
          ซึ่งเปนหนวยที่เล็กที่สุด ไมสามารถ แบงแยก
          ไมอาจสรางขึ้นหรือทําลายได 2. ธาตุประกอบดวยอนุภาคที เ ่ รียกวาอะตอม
          อะตอมของธาตุชนิดเดียวกันม ลักษณะเหมือนกัน คือ มีมวล ขนาด
          และสมบัติทางเคมีเหมือนกัน และแตกตางจากอะตอม ของธาตุชนิดอื่น 3.
          สารประกอบเกิดจากการรวมตัวของอะตอมของธาตุตั้งแต 2 ชนิดขึ้นไป มา
          รวมตัวกันดวยสัดสวนอะตอมที่คงที่และเปนเลขจํานวนเต็มหรือเศษสวนอยางงาย
          4. การเกิดปฏิกิร ย ิ าเคมีเกี่ยวของกับการแยก การรวม และการจัดอะตอมใหม
          เทานั้น ไมมีการสรางหรือการสูญหายของอะตอม
        </Paragraph>
        <List description="สิ่งที่ควรรู้เกี่ยวกับอตอม">
          <li>
            สสารทุกชนิดประกอบดวยอะตอม ซึ่งเปนหนวยที่เล็กที่สุด
            ไมสามารถแบงแยก ไมอาจสรางขึ้นหรือทําลายได
          </li>
          <li>
            ธาตุประกอบดวยอนุภาคที่เรียกวาอะตอม อะตอมของธาตุชนิดเดียวกันม
            ลักษณะเหมือนกัน คือ มีมวล ขนาด และสมบัติทางเคมีเหมือนกัน
            และแตกตางจากอะตอม ของธาตุชนิดอื่น
          </li>
          <li>สารประกอบเกิดจากการรวมตัวของอะตอมของธาตุตั้งแต 2 ชนิดขึ้นไป</li>
        </List>
        <Image />
        <SubHeading>การแผ่พลังงานของ Electron</SubHeading>
        <Paragraph>
          ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)
          เปนผูหนึ่ง
          พยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรด
          ไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลอง
          เพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลื อ
          ่ นที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ
          (Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอน
          ตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.
          อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียส
          อิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตย
          โดยมีวงโคจรเพียงบางวงที่มี คลายดาวเคราะหที่โคจรรอบ 2.
          อิเล็กตรอนจะรับหรือปลอยพลังงานออกมา
          เมื่อมีการเปลี่ยนวงโคจรที่กลาวในขอ ที่ 1
          พลังงานที่อิเล็กตรอนรับหรือปลอยออกมาจะอยูในรูปคลื่นแมเหล็กไฟฟา
          สมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.
          เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่น
          แมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงใน
          สุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลี ย ่
          นระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวา
          หรือสถานะพื น ้ จะแผคลื่นแมเหล็กไฟฟา ออกมา
          อาจเห็นเปนเสนสวางที่ไมตอเนื อ ่ ง และอาจมีความถี่อื่นๆ
          อีกที่ตามองไม เห็น
        </Paragraph>
        <Table
          name="รายชื่อที่เกี่ยวข้อง"
          description="รายชื่อผู้ที่เกี่ยวข้องกับการดำเนินการในโครงงาน"
        >
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>อายุ</th>
            </tr>
          </thead>
          <tbody>
            {[0, 0, 0, 0, 0].map((_, i) => (
              <tr>
                <td>{i}</td>
                <td>Tony</td>
                <td>Stark</td>
                <td>35</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Paragraph>
          ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)
          เปนผูหนึ่ง
          พยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรด
          ไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลอง
          เพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลื อ
          ่ นที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ
          (Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอน
          ตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.
          อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียส
          อิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตย
          โดยมีวงโคจรเพียงบางวงที่มี คลายดาวเคราะหที่โคจรรอบ 2.
          อิเล็กตรอนจะรับหรือปลอยพลังงานออกมา
          เมื่อมีการเปลี่ยนวงโคจรที่กลาวในขอ ที่ 1
          พลังงานที่อิเล็กตรอนรับหรือปลอยออกมาจะอยูในรูปคลื่นแมเหล็กไฟฟา
          สมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.
          เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่น
          แมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงใน
          สุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลี ย ่
          นระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวา
          หรือสถานะพื น ้ จะแผคลื่นแมเหล็กไฟฟา ออกมา
          อาจเห็นเปนเสนสวางที่ไมตอเนื อ ่ ง และอาจมีความถี่อื่นๆ
          อีกที่ตามองไม เห็น
        </Paragraph>
        <Slideshow />
        <SubHeading>การแผ่พลังงานของ Electron</SubHeading>
        <Paragraph>
          ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร (Niels Bohr)
          เปนผูหนึ่ง
          พยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรด
          ไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลอง
          เพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลื อ
          ่ นที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ
          (Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอน
          ตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.
          อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียส
          อิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตย
          โดยมีวงโคจรเพียงบางวงที่มี คลายดาวเคราะหที่โคจรรอบ 2.
          อิเล็กตรอนจะรับหรือปลอยพลังงานออกมา
          เมื่อมีการเปลี่ยนวงโคจรที่กลาวในขอ ที่ 1
          พลังงานที่อิเล็กตรอนรับหรือปลอยออกมาจะอยูในรูปคลื่นแมเหล็กไฟฟา
          สมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.
          เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่น
          แมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงใน
          สุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลี ย ่
          นระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวา
          หรือสถานะพื น ้ จะแผคลื่นแมเหล็กไฟฟา ออกมา
          อาจเห็นเปนเสนสวางที่ไมตอเนื อ ่ ง และอาจมีความถี่อื่นๆ
          อีกที่ตามองไม เห็น ในป 1913 นักฟสิกสชาวเดนมารกชื่อ นีล บอหร
          (Niels Bohr) เปนผูหนึ่ง
          พยายามหาคําอธิบายเพิ่มเติมเกี่ยวกับแบบจําลองอะตอมของรัทเธอรฟอรด
          ไดนําทฤษฎีกล ศาสตรควอนตัมมาประยุกตใชในการทดลอง
          เพื่อพัฒนาแบบจําลองอะตอมของรัทเธอรฟอรด อีเล็กตรอนซึ่งมีประจุลบเคลื อ
          ่ นที่รอบนิวเคลียสที่มีประจุบวกดวยแรงดึงดูดทางไฟฟาตามกฎ ของคูลอมบ
          (Coulomb) ที่สามารถอธิบายสเปกตรัมของอะตอมไฮโดรเจนที่มีเพียงอิเล็กตรอน
          ตัวเดียวไดโดยไดเสนอแบบจําลองอะตอมของไฮโดรเจนวา 1.
          อิเล็กตรอนจะเคลื่อนที่เปนวงกลมรอบนิวเคลียส
          อิเล็กตรอนไมแผคลื่นแมเหล็กไฟฟาออกมาในวงโคจรดังกลาว ดวงอาทิตย
          โดยมีวงโคจรเพียงบางวงที่มี คลายดาวเคราะหที่โคจรรอบ 2.
          อิเล็กตรอนจะรับหรือปลอยพลังงานออกมา
          เมื่อมีการเปลี่ยนวงโคจรที่กลาวในขอ ที่ 1
          พลังงานที่อิเล็กตรอนรับหรือปลอยออกมาจะอยูในรูปคลื่นแมเหล็กไฟฟา
          สมมติฐานของบอหร สามารถอธิบายปญหาปรากฏการณของอะตอมไฮโดรเจนได คือ 1.
          เหตุผลที่อิเล็กตรอนโคจรรอบนิวเคลียสของไฮโดรเจนไดโดยไมแผคลื่น
          แมเหล็กไฟฟา เพราะอิเล็กตรอนโคจรในระดับพลังงานของอะตอมบางวง ซึ่งวงใน
          สุดจะเสถียร 2. สเปกตรัมของไฮโดรเจนเกิดจากการเปลี ย ่
          นระดับพลังงานของอิเล็กตรอน จาก สถานะกระตุ น  มายังสถานะต่ํากวา
          หรือสถานะพื น ้ จะแผคลื่นแมเหล็กไฟฟา ออกมา
          อาจเห็นเปนเสนสวางที่ไมตอเนื อ ่ ง และอาจมีความถี่อื่นๆ
          อีกที่ตามองไม เห็น
        </Paragraph>
        <div style={{ textAlign: "center" }}>
          <Attachment filename="very-hard-homework.pdf" size="300" type="PDF" />
          <Attachment filename="very-hard-homework.pdf" size="300" type="PDF" />
          <Attachment filename="very-hard-homework.pdf" size="300" type="PDF" />
          <Attachment filename="very-hard-homework.pdf" size="300" type="PDF" />
          <Attachment filename="very-hard-homework.pdf" size="300" type="PDF" />
          <Attachment filename="very-hard-homework.pdf" size="300" type="PDF" />
        </div>
      </PostContentWrapper>
    );
  }
}

export default PostContent;
