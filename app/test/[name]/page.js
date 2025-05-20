import Link from 'next/link';

/**
 * NamePage
 * @param params {Promise}
 * @param searchParams {Promise}
 * @returns {Promise<JSX.Element>}
 * @constructor
 */
export default async function NamePage({ params, searchParams }) {
  // params와 searchParams를 비동기적으로 가져오기
  const { name: encodedName } = await params;
  const { age = '알 수 없음', gender = '알 수 없음' } = await searchParams;
  
  // URL 인코딩된 이름을 디코딩
  const name = decodeURIComponent(encodedName);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">안녕하세요, {name}님!</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">사용자 정보</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="font-medium w-24">이름:</span> 
            <span className="bg-white px-3 py-1 rounded">{name}</span>
          </li>
          <li className="flex items-center">
            <span className="font-medium w-24">나이:</span> 
            <span className="bg-white px-3 py-1 rounded">{age}세</span>
          </li>
          <li className="flex items-center">
            <span className="font-medium w-24">성별:</span> 
            <span className="bg-white px-3 py-1 rounded">{gender}</span>
          </li>
        </ul>
      </div>
      
      <p className="text-lg mb-4">
        이 페이지는 동적 라우팅을 사용하여 URL의 <code className="bg-gray-100 px-2 py-1 rounded">[name]</code> 파라미터를 표시합니다.
      </p>
      
      <p className="text-lg mb-6">
        또한 <code className="bg-gray-100 px-2 py-1 rounded">?age=값&gender=값</code> 형식의 쿼리 파라미터도 사용합니다.
      </p>
      
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="text-xl font-semibold">다른 예시 링크:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link 
            href={`/test/${encodeURIComponent(name)}?age=25&gender=남성`}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center"
          >
            {name} (25세, 남성)
          </Link>
          <Link 
            href={`/test/${encodeURIComponent(name)}?age=30&gender=여성`}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-center"
          >
            {name} (30세, 여성)
          </Link>
        </div>
      </div>
      
      <div className="mt-8">
        <Link
          href="/test" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          테스트 페이지로 돌아가기
        </Link>
      </div>
    </div>
  );
}
