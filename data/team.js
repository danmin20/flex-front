export const teamList = [
    {
        team: "Team 1",
        name: "김병규",
        member: ["고명진", "김민태", "김병규", "우수연"],
        color: "#42ebcc",
        dir: "flip-right",
        content: "Elasticsearch로 스팀게임 후기 검색하기",
        modalContent: {
            services: ['RDS', 'Beanstalk', 'ElasticSearch'],
            intro: '스팀게임 후기 검색하기',
            impress: '주기적으로 스팀에서 후기를 끌어오는데 Search에 붙이는 작업은 하지 못했네요 ㅠ\n시험기간은 지옥입니당..'
        }
    },
    {
        team: "Team 2",
        name: "신동선",
        member: ["신동선", "윤서현", "이시연"],
        color: "#FFA62A",
        dir: "flip-left",
        content: "Lambda로 학교 공지사항 크롤링하기",
        modalContent: {
            services: ['Lambda', 'DynamoDB'],
            intro: '학교 사이트를 정기적으로 크롤링하여 매시간마다 어떤 글이 올라왔는지 확인할 수 있는 프로젝트를 진행했다.\nNode.js + puppeteer를 사용했다.\n크롤링 후 새로 올라온 글은 db에 저장하고, slack에 전송할 수 있도록 구현했다.',
            impress: 'lambda의 무료 제공 범위가 생각보다 크다는 것을 알았다.\n그래서 크레딧 탕진을 많이하진 못했다...'
        }
    },
    {
        team: "Team 3",
        name: "어",
        member: ["배진수", "이정민", "황지혜"],
        color: "#FFF943",
        dir: "flip-right",
        content: "CloudSearch로 전통주 검색하기",
        modalContent: {
            services: ['AWS CloudSearch'],
            intro: '전통주 검색 및 필터링 서비스(술담화에서 데이터 크롤링)',
            impress: '검색 엔진으로 ElasticSearch 대신 좀 더 쉽게 구축할 수 있는 CloudSearch를 써 봤는데,\n생각보다 할만해서 다음에는 ElasticSearch를 써 봐야겠다.'
        }
    }
]