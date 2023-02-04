# 알, 콜? 🍺🍷🍸 
리뷰 기반 술집 추천 플랫폼

--------
### ✔️ 기획 의도
```
- 지도 서비스의 리뷰들은 진정성이 없고 광고 글이 많아 혼란스러움.

- 실제 사용자들이 자유롭게 술집을 추천할 수 있는 플랫폼을 만들고자 기획함.

- 나만 알고 있던 숨은 술집을 추천하고 추천받는 플랫폼 ( 광고❌, 내돈내먹⭕️ ) 
```

--------

### ✔️ 기능 전개

<img src="https://user-images.githubusercontent.com/79568825/214505796-4cf89c02-4c26-4501-8fd6-70c05acb7648.png" width="600" height="400"/>

--------
### ✔️ 화면 설계 (피그마)

![image](https://user-images.githubusercontent.com/79568825/214994879-d9c6ae3b-ba25-4799-ba6b-498fa696b4f7.png)

--------
### ✔️ DB 설계

<img src="https://user-images.githubusercontent.com/79568825/214506078-34d454bb-f946-4774-927f-8785e50a2780.png" width="800" height="400"/>

--------
### ✔️ skills
```
- Front : HTML, CSS, JS, React

- Back : Node.js, MySQL
```
--------

### ✔️ 맡은 역할 ( Back - End )
```
- DB 설계
- 술집 주소 검색 (카카오 지도 검색 api 사용)
- 리뷰 등록
- 리뷰 검색
- 리뷰 출력 (Front)

<Back>
routes>list.js ( 술집 주소 검색 )
routes>add.js ( 리뷰 등록 )
routes>search.js ( 리뷰 검색 )

<Front>
src>views>CreateReview>Modal2.js ( 술집 주소 검색 페이지 )
src>views>CreateReview>CreateReview.js ( 리뷰 등록 페이지 )
src>views>Map>Map.js ( 지도&마커&인포윈도우 생성, 리뷰 검색 페이지 )
src>components>Modal>Modal.js ( 마커 클릭 시 오픈되는 리뷰 페이지 )

```
--------

 ### ✔️ 화면 구현 (메인 페이지)
![image](https://user-images.githubusercontent.com/79568825/214507369-284ff38f-d53e-4aa5-8d67-7367555ae23e.png)

 ### ✔️ 화면 구현 (리뷰 등록 페이지)
![image](https://user-images.githubusercontent.com/79568825/214510881-e6f14bff-9301-4c43-a4f8-5521863856d3.png)

<img src="https://user-images.githubusercontent.com/79568825/214507734-46766950-9f63-4807-a01a-f8eca6606464.png" width="550" height="450"/> 
<img src="https://user-images.githubusercontent.com/79568825/214507760-d4c3a137-8695-4aac-aaee-86c2595e22c3.png" width="550" height="450"/>

<img src="https://user-images.githubusercontent.com/79568825/214507783-2e171a8b-388b-4092-8bf0-8e2fedfc2a2c.png" width="700" height="600"/> 

 ### ✔️ 화면 구현 (지도 페이지)
 ```
 - 검색 버튼 클릭 시 -> 전체 데이터 보여줌.
 ```
 ![image](https://user-images.githubusercontent.com/79568825/214507899-65ead66a-aec3-425c-9624-382e4c6270cb.png)
 
 ```
 - 카테고리로만 검색 ex) 맥주
 ```
![image](https://user-images.githubusercontent.com/79568825/214507961-83347561-c506-4365-a40c-cda0e6b593d2.png)

```
- 키워드(주소)로만 검색 ex) 강남 
```
![image](https://user-images.githubusercontent.com/79568825/214508032-09c44713-ecf0-4463-aaa9-ab9127f8283b.png)

```
- 키워드 & 카테고리 둘 다 검색 ex) 강남, 맥주
```
![image](https://user-images.githubusercontent.com/79568825/214508099-0b110f0f-1bbe-493c-b2bf-56be9d6c0d23.png)

```
- 검색에 해당하는 리뷰가 없을 시 -> 없다는 알림창을 띄움.
```
![image](https://user-images.githubusercontent.com/79568825/214508192-0c58f7dc-098a-48e9-a9ab-1e244ec00bb5.png)


 ### ✔️ 화면 구현 (리뷰 페이지)
 
 ```
 - 핀 클릭 시 ->  해당 술집의 리뷰페이지가 모달로 뜸.
 - 상호명, 카테고리, 사진, 글(추천자의 말), 카카오 지도 url(카카오 맵으로 보기 버튼 클릭시 이동)을 가져와서 보여줌.
 ```
<img src="https://user-images.githubusercontent.com/79568825/214508340-ff479f41-6427-4100-ba8d-ea72b1bebaab.png" width="500" height="600"/> 
<img src="https://user-images.githubusercontent.com/79568825/214508431-d7a6b6d7-3597-42cf-90a5-7879904af236.png" width="500" height="450"/> 






