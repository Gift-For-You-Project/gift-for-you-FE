import React, { useEffect } from 'react'; // React와 useEffect 훅을 React 라이브러리에서 불러옵니다.
import axios from 'axios'; // HTTP 요청을 보내기 위해 axios를 가져옵니다.
import {
    Button,
    KakaoPayLogo,
} from './KakaoPayStyles';

const KakaoPay = () => {
    // KakaoPay라는 함수형 컴포넌트를 정의합니다.
    const sendAmountToServer = async (amount) => {
        // 서버로 금액을 전송하는 비동기 함수를 정의합니다.
        const accessToken = localStorage.getItem('accessToken'); // localStorage에서 accessToken을 가져옵니다.
        try {
            const response = await axios.post(
                'REACT_APP_API_URL',
                {
                    // 서버로 POST 요청을 보냅니다.
                    point: amount, // 요청 본문에 금액을 담습니다.
                },
                {
                    headers: {
                        Authorization: accessToken, // 요청 헤더에 accessToken을 포함시킵니다.
                    },
                }
            );

            if (response.status === 200) {
                // 요청이 성공했는지 확인합니다.
                alert('서버로 amount 전송 완료'); // 서버로의 전송이 성공한 경우 알림창을 띄웁니다.
            } else {
                alert('서버로 amount 전송 실패'); // 서버로의 전송이 실패한 경우 알림창을 띄웁니다.
            }
        } catch (error) {
            console.error('서버로 amount 전송 중 오류:', error); // 전송 중 오류가 발생한 경우 콘솔에 오류를 기록합니다.
            alert('서버로 amount 전송 중 오류 발생'); // 전송 중 오류가 발생한 경우 알림창을 띄웁니다.
        }
    };

    const requestPay = () => {
        // 결제 요청을 처리하는 함수를 정의합니다.
        const { IMP } = window; // window 객체에서 IMP 객체를 가져옵니다.

        IMP.init('imp82385247'); // IMP 객체를 초기화합니다.

        IMP.request_pay(
            {
                // IMP 객체를 사용하여 결제 요청을 보냅니다.
                pg: 'kakaopay.TC0ONETIME', // 결제 수단을 설정합니다.
                pay_method: 'card', // 결제 방법을 설정합니다.
                merchant_uid: new Date().getTime(), // 고유한 상점 ID를 생성합니다.
                name: 'Giftipie후원금', // 상품 이름을 설정합니다.
                amount: 10000, // 결제 금액을 설정합니다.
                buyer_email: 'test@naver.com', // 구매자 이메일을 설정합니다.
                buyer_name: '코드쿡', // 구매자 이름을 설정합니다.
                buyer_tel: '010-1234-5678', // 구매자 전화번호를 설정합니다.
                // buyer_addr: '서울특별시', // 구매자 주소를 설정합니다.
                // buyer_postcode: '123-456', // 구매자 우편번호를 설정합니다.
            },
            async (rsp) => {
                // 결제 요청 후 콜백 함수를 처리합니다.
                try {
                    const { data } = await axios.post('REACT_APP_API_URL' + rsp.imp_uid); // 서버에서 결제 검증을 수행합니다.
                    if (rsp.paid_amount === data.response.amount) {
                        // 결제 금액이 서버 응답과 일치하는지 확인합니다.
                        alert('결제 성공'); // 결제가 성공한 경우 알림창을 띄웁니다.
                        sendAmountToServer(rsp.paid_amount); // 결제된 금액을 서버로 전송합니다.
                    } else {
                        alert('결제 실패'); // 결제가 실패한 경우 알림창을 띄웁니다.
                    }
                } catch (error) {
                    console.error('결제 검증 중 오류:', error); // 결제 검증 중 오류가 발생한 경우 콘솔에 오류를 기록합니다.
                    alert('결제 실패'); // 결제 검증 중 오류가 발생한 경우 알림창을 띄웁니다.
                }
            }
        );
    };

    useEffect(() => {
        // 외부 스크립트를 로드하기 위해 useEffect 훅을 사용합니다.
        const jquery = document.createElement('script'); // jQuery 스크립트 엘리먼트를 생성합니다.
        jquery.src = 'http://code.jquery.com/jquery-1.12.4.min.js'; // jQuery 스크립트의 소스를 설정합니다.
        const iamport = document.createElement('script'); // Iamport 스크립트 엘리먼트를 생성합니다.
        iamport.src = 'http://cdn.iamport.kr/js/iamport.payment-1.1.7.js'; // Iamport 스크립트의 소스를 설정합니다.
        document.head.appendChild(jquery); // jQuery 스크립트를 문서 헤드에 추가합니다.
        document.head.appendChild(iamport); // Iamport 스크립트를 문서 헤드에 추가합니다.
        return () => {
            // 컴포넌트가 언마운트될 때 추가한 스크립트를 제거하기 위한 클린업 함수를 반환합니다.
            document.head.removeChild(jquery); // 문서 헤드에서 jQuery 스크립트를 제거합니다.
            document.head.removeChild(iamport); // 문서 헤드에서 Iamport 스크립트를 제거합니다.
        };
    }, []); // useEffect가 초기 렌더링 후 한 번만 실행되도록 빈 의존성 배열을 전달합니다.

    return (
        <div>
            {/* <button onClick={requestPay}>결제하기</button> */}
            <Button onClick={requestPay}>
            <KakaoPayLogo src="/imgs/kakaopay.png" alt="image" />
            </Button>
        </div>
    );
};

export default KakaoPay; // Payment 컴포넌트를 내보냅니다.
