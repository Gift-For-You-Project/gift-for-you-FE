import React from "react";
import { IoClose } from "react-icons/io5";
import theme from "../../../styles/theme";
import { Background, P } from "../Login/LoginModalStyles";
import { ModalContainer, IoCloseDiv, TxtDiv, TermsDiv } from "./ModalStyles";

const ServiceModal = ({ closeModal }) => {
  return (
    <>
      <Background onClick={closeModal} />
      <ModalContainer>
        <IoCloseDiv onClick={closeModal}>
          <IoClose />
        </IoCloseDiv>
        <TxtDiv>
          <P fs={theme.title} color={theme.black}>
            서비스 이용약관
          </P>
        </TxtDiv>
        <TermsDiv>
          <P fs={theme.body2} fw="600" p="10px">
            제1조 목적
          </P>
          <P fs={theme.body2} p="10px">
            본 이용약관은 Giftipie(이하 "기프티파이")의
            서비스(https://giftipie.me, 이하 "플랫폼" 또는 "사이트")의
            이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.
            기프티파이는 플랫폼을 통해 회원이 펀딩을 등록하고 이용자가 등록된
            펀딩을 테스트 결제로 후원하는 서비스 경험을 제공하고자 합니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px">
            제2조 약관의 명시, 효력 및 변경
          </P>
          <P fs={theme.body2} p="10px">
            기프티파이는 본 약관의 내용을 서비스가 제공되는 사이트에 게시합니다.
            <br />* 이 약관은 기프티파이와 회원간에 성립되는
            서비스이용계약의기본약정입니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px">
            제3조 용어의 정의
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 본 약관에
            명시되지 않은 용어는 관련 법령이 정하는 바에 따르며, 그 외에는
            일반적인 상거래 관행에 의합니다.
            <br />
            <br />
            (1) 운영자: "기프티파이"를 말합니다. <br />
            (2) 사이트: 기프티파이가 운영하는 사이트로 https://giftipie.me를
            말합니다.
            <br />
            (3) 서비스: 사이트에서 이용 가능한 서비스를 말합니다.
            <br />
            (4) 회원: 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한
            자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 자를
            말합니다.
            <br />
            (5) 이용 계약: 사이트 이용과 관련하여 사이트와 회원 간에 체결 하는
            계약을 말합니다.
            <br />
            (6) 비밀번호: 회원임을 확인하고 회원의 권익 보호를 위하여 회원이
            선정한 문자와 숫자의 조합을 말합니다.
            <br />
            (7) 펀딩 등록: 받고자 하는 상품 또는 서비스를 등록하는 행위를
            말합니다.
            <br />
            (8) 수증자: 받고자 하는 상품 또는 서비스를 지정하는 주체를 말합니다.
            <br />
            (9) 지정 금액: 받고자 하는 상품 또는 서비스의 금액을 말합니다.
            <br />
            (10) 결제: 이용자가 수증자가 선택한 상품 또는 서비스를 위해 실
            결제가 아닌 테스트 결제를 하는 것을 말합니다.
            <br />
            (11) 결제 금액: 물품의 판매가 등 관련 비용을 전부 합한 금액을
            말합니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 144.9px" bc={theme.white}>
            제4조 약관외 준칙
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            기프티파이는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본
            약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 139.3px" bc={theme.white}>
            제5조 이용계약 체결
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 기프티파이가 제공하는 서비스에 관한 이용계약(이하
            "이용계약"이라고 합니다)은 해당 서비스를 이용하고자 하는 자의
            이용신청(회원가입 신청)에 대하여 기프티파이가 승낙함으로써
            성립합니다.
            <br />
            (2) 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본
            약관을 읽고 "동의합니다"를 선택하는 것으로 본 약관에 대한 동의 의사
            표시를 합니다.
            <br />
            (3) 회원은 기프티파이가 제공하는 서비스를 이용함에 있어서 관련
            법령을 준수하여야 하며, 이 약관의 규정을 들어 관련 법령 위반에 대한
            면책을 주장할 수 없습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 144.9px" bc={theme.white}>
            제6조 서비스 이용
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 기프티파이의 서비스 정의는 다음과 같습니다.
            <br />
            기프티파이는 실 결제가 이뤄지는 서비스가 아니며, 회원이 펀딩을
            등록하고 이용자가 등록된 펀딩을 테스트 결제로 후원하는 서비스입니다.
            <br />
            <br />
            (2) 기프티파이는 다음과 같은 서비스를 제공합니다.
            <br />
            1. 펀딩 등록을 위한 플랫폼 제공
            <br />
            2. 테스트 결제 업무 대행
            <br />
            3. 부수되는 서비스 및 기타 기프티파이가 정하는 업무
            <br />
            <br />
            (3) 기프티파이는 회원의 이용신청을 승낙하여 이용계약이 성립한 때부터
            서비스를 개시합니다. <br />
            (4) 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서
            요청하는 제반 정보(이용자 이메일, 닉네임, 비밀번호)를 제공해야
            합니다.
            <br />
            (5) 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한
            정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를
            주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.
            <br />
            (6) 회원의 서비스 가입은 무료입니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 127.2px" bc={theme.white}>
            제7조 개인정보 처리방침
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            사이트 및 기프티파이는 회원가입 시 제공한 개인정보 중 실제
            비밀번호를 가지고 있지 않으며 이와 관련된 부분은 사이트의 개인정보
            처리방침을 따릅니다. 기프티파이는 관계 법령이 정하는 바에 따라
            회원등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다.
            <br />
            회원의 개인정보보호에 관하여 관계 법령 및 사이트가 정하는 개인정보
            처리방침에 정한 바에 따릅니다. 단, 회원의 귀책 사유로 인해 노출된
            정보에 대해 기프티파이는 일체의 책임을 지지 않습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 138.7px" bc={theme.white}>
            제8조 운영자의 의무
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 기프티파이는 지속적이고 안정적으로 서비스를 제공하는 데 최선을
            다하며, 관련 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를
            하지 않습니다.
            <br />
            (2) 기프티파이는 회원의 회원 정보 보호를 위해 개인정보 처리방침을
            공지하고 준수합니다.
            <br />
            (3) 기프티파이는 계속적이고 안정적인 서비스의 제공을 위하여 설비에
            장애가 생기거나 멸실된 때에는 부득이한 사유가 없는 한 지체없이 이를
            수리 또는 복구합니다.
            <br />
            (4) 기프티파이는 회원으로부터 제기되는 의견이나 불만이 정당하다고
            인정할 경우에는 신속히 처리하여야 합니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 144.9px" bc={theme.white}>
            제9조 회원의 의무
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 회원은 본 약관에서 규정하는 사항과 기프티파이가 정한 제반규정,
            공지사항 및 운영정책 등 사이트가 공지하는 사항 및 관계 법령을
            준수하여야 하며, 기타 사이트의 업무에 방해가 되는 행위, 사이트의
            명예를 손상시키는 행위를 해서는 안됩니다.
            <br />
            (2) 회원은 사이트의 명시적 동의가 없는 한 서비스의 이용권한, 기타
            이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로
            제공할 수 없습니다.
            <br />
            (3) 이용고객은 개인정보 관리에 상당한 주의를 기울여야 하며,
            기프티파이나 사이트의 동의 없이 제3자에게 제공하여 이용하게 할 수
            없습니다.
            <br />
            (4) 회원은 기프티파이와 사이트 및 제3자의 지적 재산권을 침해해서는
            안됩니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 127.8px" bc={theme.white}>
            제10조 서비스 이용 시간
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한
            테스트 기간 내 1일 24시간을 원칙으로 합니다. 단, 사이트는 시스템
            정기점검, 증설 및 교체를 위해 사이트가 정한 날이나 시간에 서비스를
            일시중단 할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은
            사이트의 홈페이지에 사전에 공지하오니 수시로 참고하시길 바랍니다.
            <br />
            (2) 사이트는 다음 경우에 대하여 사전 공지나 예고 없이 서비스를
            일시적 혹은 영구적으로 중단할 수 있습니다.
            <br />
            * 긴급한 시스템 점검, 증설, 교체, 고장 혹은 오동작을 일으키는 경우
            <br />
            * 국가비상사태, 정전, 천재지변 등의 불가항력적인 사유가 있는 경우
            <br />
            * 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한
            경우
            <br />* 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는
            경우
            <br />
            (3) 전항에 의한 서비스 중단의 경우 사이트는 사전에 공지사항 등을
            통하여 회원에게 통지합니다. 단, 사이트가 통제할 수 없는 사유로
            발생한 서비스의 중단에 대하여 사전공지가 불가능한 경우에는
            사후공지로 대신합니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 129.6px" bc={theme.white}>
            제11조 서비스 이용 제한
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            회원은 다음 각 호에 해당하는 행위를 하여서는 아니되며 해당 행위를 한
            경우에 사이트는 회원의 서비스 이용 제한 및 적법한 조치를 취할 수
            있으며 이용계약을 해지하거나 기간을 정하여 서비스를 중지할 수
            있습니다.
            <br />
            (1) 타인의 사이트 이용을 방해하거나 정보를 도용하는 행위
            <br />
            (2) 사이트의 운영진, 직원 또는 관계자를 사칭하는 행위
            <br />
            (3) 사이트, 기타 제3자의 인격권 또는 지적재산권을 침해하거나 업무를
            방해하는 행위
            <br />
            (4) 다른 회원의 개인정보를 부정하게 사용하는 행위
            <br />
            (5) 다른 회원에 대한 개인정보를 그 동의 없이 수집, 저장, 공개하는
            행위
            <br />
            (6) 범죄와 결부된다고 객관적으로 판단되는 행위
            <br />
            (7) 기타 관련 법령에 위배되는 행위
          </P>
          <P fs={theme.body2} fw="600" p="10px 136.4px" bc={theme.white}>
            제12조 게시물의 관리
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 사이트의 게시물과 자료의 관리 및 운영의 책임은 기프티파이에
            있습니다. 기프티파이는 항상 불량 게시물 및 자료에 대하여 모니터링을
            하여야 하며, 불량 게시물 및 자료를 발견하거나 신고를 받으면 해당
            게시물 및 자료를 삭제하고 이를 등록한 회원에게 주의를 주어야 합니다.
            <br />
            한편, 이용회원이 올린 게시물에 대해서는 게시자 본인에게 책임이
            있으니 회원스스로 본 이용약관에서 위배되는 게시물은 게재해서된
            안됩니다.
            <br />
            (2) 정보통신윤리위원회 등 공공기관의 시정요구가 있는 경우
            기프티파이는 회원의 사전동의 없이 게시물을 삭제하거나 이동 할 수
            있습니다.
            <br />
            (3) 불량게시물의 판단기준은 다음과 같습니다.
            <br />
            * 다른 회원 또는 제3자에게 심한 모욕을 주거나 명예를 손상시키는
            내용인 경우
            <br />
            * 공공질서 및 미풍양속에 위반되는 내용을 유포하거나 링크시키는 경우
            <br />
            * 불법복제 또는 해킹을 조장하는 내용인 경우
            <br />
            * 영리를 목적으로 하는 광고일 경우
            <br />
            * 범죄와 결부된다고 객관적으로 인정되는 내용일 경우
            <br />
            * 다른 이용자 또는 제3자와 저작권 등 기타 권리를 침해하는 경우
            <br />* 기타 관계 법령에 위배된다고 판단되는 경우
          </P>
          <P fs={theme.body2} fw="600" p="10px 136.4px" bc={theme.white}>
            제13조 게시물의 보관
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            기프티파이가 불가피한 사정으로 본 사이트를 중단하게 될 경우,
            회원에게 사전 공지합니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 116.2px" bc={theme.white}>
            제14조 게시물에 대한 저작권
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 회원이 사이트 내에 게시한 게시물의 저작권은 게시한 회원에게
            귀속됩니다. 또한 사이트는 게시자의 동의 없이 게시물을 상업적으로
            이용할 수 없습니다. 다만 비영리 목적인 경우는 그러하지 아니하며,
            또한 서비스 내의 게재권을 갖습니다.
            <br />
            (2) 회원은 서비스를 이용하여 취득한 정보를 임의 가공, 판매하는 행위
            등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.
            <br />
            (3) 기프티파이는 회원이 게시하거나 등록하는 사이트 내의 내용물, 게시
            내용에 대해 제12조 각 호에 해당된다고 판단되는 경우 사전통지 없이
            삭제하거나 이동 또는 등록 거부할 수 있습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 150.5px" bc={theme.white}>
            제15조 손해배상
          </P>
          <P fs={theme.body2} p="10px 10.5px" bc={theme.white}>
            (1) 본 사이트의 발생한 모든 책임은 회원 및 이용자 본인에 있습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 162.3px" bc={theme.white}>
            제16조 면책
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 기프티파이는 회원이 사이트의 서비스 제공으로부터 기대되는 이익을
            얻지 못하였거나 서비스 자료에 대한 취사선택 또는 이용으로 발생하는
            손해 등에 대해서는 책임이 면제됩니다.
            <br />
            (2) 기프티파이는 본 사이트의 서비스 기반 및 타 통신업자가 제공하는
            전기통신서비스의 장애로 인한 경우에는 책임이 면제되며 본 사이트의
            서비스 기반과 관련되어 발생한 손해에 대해서는 사이트의 이용약관에
            준합니다.
            <br />
            (3) 기프티파이는 회원이 저장, 게시 또는 전송한 자료와 관련하여
            일체의 책임을 지지 않습니다.
            <br />
            (4) 기프티파이는 회원의 귀책사유로 인하여 서비스 이용의 장애가
            발생한 경우에는 책임지지 아니합니다.
            <br />
            (5) 기프티파이는 회원 상호간 또는 회원과 제3자 상호간, 기타 회원의
            본 서비스 내외를 불문한 일체의 활동(데이터 전송, 기타 커뮤니티 활동
            포함)에 대하여 책임을 지지 않습니다.
            <br />
            (6) 기프티파이는 회원이 게시 또는 전송한 자료 및 본 사이트로 회원이
            제공받을 수 있는 모든 자료들의 진위, 신뢰도, 정확성 등 그 내용에
            대해서는 책임지지 아니합니다.
            <br />
            (7) 기프티파이는 회원 상호간 또는 회원과 제3자 상호간에 서비스를
            매개로 하여 물품거래 등을 한 경우에 그로부터 발생하는 일체의 손해에
            대하여 책임지지 아니합니다.
            <br />
            (8) 기프티파이는 귀책사유 없이 회원간 또는 회원과 제3자간에 발생한
            일체의 분쟁에 대하여 책임지지 아니합니다.
            <br />
            (9) 기프티파이는 서버 등 설비의 관리, 점검, 보수, 교체 과정 또는
            소프트웨어의 운용 과정에서 고의 또는 고의에 준하는 중대한 과실 없이
            발생할 수 있는 시스템의 장애, 제3자의 공격으로 인한 시스템의 장애,
            국내외의 저명한 연구기관이나 보안관련 업체에 의해 대응방법이
            개발되지 아니한 컴퓨터 바이러스 등의 유포나 기프티파이가 통제할 수
            없는 불가항력적 사유로 인한 회원의 손해에 대하여 책임지지 않습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 100.8px" bc={theme.white}>
            제17조 수증자의 펀딩 생성 및 이용
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 수증자는 기프티파이가 정한 약식과 절차에 따라 펀딩 페이지를
            생성하고, 사이트에 펀딩을 게시 또는 등록할 수 있습니다.
            <br />
            (2) 원하는 선물의 링크를 최대 1개까지 입력할 수 있으며 제목, 내용,
            사진 등을 업로드할 수 있습니다.
            <br />
            (3) 수증자는 기프티파이가 제공하는 에디터를 사용하여 내용을 직접
            작성해야 합니다.
            <br />
            (4) 수증자가 기프티파이가 정한 방법, 범위 및 본 약관을 벗어나서
            서비스를 이용할 경우에 생기는 불이익에 대해서는 기프티파이가
            책임지지 않습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 120.3px" bc={theme.white}>
            제18조 결제 및 펀딩의 성립
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 이용자는 펀딩 마감일까지의 기간 동안 페이지에서 펀딩에 원하는
            금액으로 테스트 결제를 할 수 있습니다. <br />
            (2) 결제 과정에서 수증자에게 닉네임과 메시지를 남기면 테스트 결제 후
            닉네임과 메시지가 함께 공개됩니다.
            <br />
            (3) 기프티파이는 정확한 테스트 결제처리를 위해 아래와 같은 이용자의
            정보를 결제 대행사에 제공합니다.
            <br />
            * 구분 : 테스트 결제 처리
            <br />
            * 수탁자 : 카카오페이
            <br />
            * 위탁항목 : 테스트 결제를 위해 자동으로 수집되는 정보
            <br />* 위탁업무 : 카카오페이 데모 결제처리
          </P>
          <P fs={theme.body2} fw="600" p="10px 148.3px" bc={theme.white}>
            제19조 기타 조항
          </P>
          <P fs={theme.body2} p="10px" bc={theme.white}>
            (1) 기프티파이는 회원이 제기하는 정당한 의견이나 불만 사항을
            적극적으로 반영하고 그 문제를 해결하기 위하여 고객센터를 설치,
            운영합니다. 기프티파이는 회원으로부터 제기되는 의견과 불만 사항을
            적극적으로 검토하고, 정당하다고 판단될 때에는 이를
            처리하여 처리방안을 통보합니다. <br />
            (2) 본 서비스에 대한 문의 및 서비스 이용에 대한 불편 사항은 채널톡을
            통해 접수해주시면 성심껏 처리해드리겠습니다.
          </P>
          <P fs={theme.body2} fw="600" p="10px 182.8px" bc={theme.white}>
            부칙
          </P>
          <P fs={theme.body2} p="0 10px 50px 10px" bc={theme.white}>
            본 약관은 서비스 시작일을 기준으로 적용되며 2024년 02월 25일부터
            시행됩니다.
          </P>
        </TermsDiv>
      </ModalContainer>
    </>
  );
};

export default ServiceModal;
