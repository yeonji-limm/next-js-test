import Link from 'next/link';

export default async function TestPage() {
  // 필요한 경우 여기서 비동기 데이터를 가져올 수 있습니다.
  const test = 'test';
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">테스트 페이지</h1>
      <p className="text-lg mb-8">안녕하세요, 연습중입니다... {test}</p>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">동적 라우팅 예시</h2>
        <p className="mb-4">아래 링크를 클릭하여 동적 라우팅 페이지로 이동해보세요:</p>
        
        <div className="grid grid-cols-1 gap-3">
          <Link 
            href={`/test/${encodeURIComponent('홍길동')}`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-center"
          >
            홍길동 페이지
          </Link>
          <Link 
            href={`/test/${encodeURIComponent('김철수')}?age=25&gender=${encodeURIComponent('남성')}`}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center"
          >
            김철수 페이지 (25세, 남성)
          </Link>
          <Link 
            href={`/test/${encodeURIComponent('이영희')}?age=30&gender=${encodeURIComponent('여성')}`}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-center"
          >
            이영희 페이지 (30세, 여성)
          </Link>
        </div>
      </div>
      
      <Link 
        href="/"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}