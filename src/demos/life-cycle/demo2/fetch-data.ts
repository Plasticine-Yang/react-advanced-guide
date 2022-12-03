import { ItemData, ScrollViewItem } from './scroll-view/scroll-view'

const totalPage = 3

let itemId = 0

interface Data {
  code: number
  page: number
  list: ScrollViewItem<ItemData>[]
}

/** @description 模拟获取数据 */
const fetchData = (page: number): Promise<Data> => {
  return new Promise<Data>((resolve, reject) => {
    if (page <= totalPage) {
      resolve({
        code: 0,
        page,
        list: [
          {
            id: itemId++,
            data: {
              title:
                '约斯夫家庭校园多功能创可贴卡通女少女可爱超弹防水透气弹力小面积开放性创伤创口贴',
              cover:
                'https://img14.360buyimg.com/n1/jfs/t1/117043/23/16493/438028/5f50a682E96819e0d/a3678e5c4fb5a3cf.jpg',
              price: 66,
            },
          },
          {
            id: itemId++,
            data: {
              title:
                '【MaincareBio】医用外科口罩一次性无菌三层透气成人挂耳式防细菌病毒飞沫防护医用口罩 儿童医用外科口罩50只【10只/包*5包】',
              cover:
                'https://img14.360buyimg.com/n1/jfs/t1/133614/39/16312/128620/5fb3a1b8E02fec0c6/0b7d82a132932f35.jpg',
              price: 77,
            },
          },
          {
            id: itemId++,
            data: {
              title:
                '乐樊一次性医用外科口罩医生专用成人通用三层医疗口罩透气单片防护 医用外科口罩100只蓝色【非独立包装/2包】',
              cover:
                'https://img14.360buyimg.com/n1/jfs/t1/151889/33/15018/129441/6008e066Ee813ef0d/1f1a8218fa30a05f.jpg',
              price: 88,
            },
          },
          {
            id: itemId++,
            data: {
              title:
                '俏东方 一次性医用口罩白色 轻薄透气 三层防护含熔喷过滤成人男女适用冬季防护面罩 50只医用口罩白色整包(工厂特惠)',
              cover:
                'https://img14.360buyimg.com/n1/jfs/t1/164271/11/7365/212791/6032be25E162107e3/df794675c5095edf.jpg',
              price: 99,
            },
          },
          {
            id: itemId++,
            data: {
              title:
                '【7仓隔日达】咔贝爱(KABEIAI)一次性医用防护口罩防尘防雾霾防颗粒物 三层防护透气医用口罩 医用口罩50只（1包）',
              cover:
                'https://img14.360buyimg.com/n1/jfs/t1/156216/4/9112/168310/601e5d2aE4ad9ee3b/65a25f358d136a20.jpg',
              price: 100,
            },
          },
        ],
      })
    } else {
      resolve({
        code: 100,
        page,
        list: [],
      })
    }
  })
}

export { fetchData }
