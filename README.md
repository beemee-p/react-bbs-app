## **컴포넌트 구조**

Context API 사용

- 쿼리 필터 객체 (상태 / 정렬 / 페이지)

내부 state

- 모달 on/off 버튼

이슈 상태 버튼 <Button />

- <Icon/> 사용 - 애니메이션 넣어주기

이슈 정렬 버튼 <TextButton />

- <Icon/> 추가 - 애니메이션 넣어주기

이슈 테이블 <Table type="primary" list={issueList} column={issueColumn} />

- issueList 에서 필요한 데이터만 가공한 객체 생성 { value: '', key: '' }
- column 은 키 라벨 리스트로 보냄

페이지 네이터 <Paginator totalPage={10} perPage={5} onChange={} />

- props: 전체 페이지 / 페이지 범위 / onChange(newpage => 쿼리필터 저장) //
- 내부 변수 : page, pageGroup
- 내부 함수 : onPageChange( ) / onPageGroupChange

이슈 상태 필터 <IssueStateModal />

- 쿼리 필터 변수
- <Modal /> 공통 컴포넌트 사용

이슈 정렬 필터 <IssueSortModal />

- 쿼리 필터 변수
- <Modal /> 공통 컴포넌트 사용

HOXY 리팩토링할 시간이 있다면 ?
url searchParam 으로 관리

api 정보
https://api.github.com/repos/facebook/react/issues

queryParam
state : open(default), closed, all
sort : created(default), updated, comments
