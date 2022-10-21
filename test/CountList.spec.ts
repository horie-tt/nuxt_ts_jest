import { mount } from '@vue/test-utils'
import CountList from '@/components/CountList.vue'

describe('計算テスト', () => {
  test('2 + 2=?', () => {
    expect(2 + 2).toBe(4)
  })
  test('割り算合ってる？', () => {
    expect(33 / 11).toBe(3)
  })
})

describe('CountList', () => {
  const wrapper = mount(CountList)
  it('click button count up', async () => {
    // DOM更新系は即座にDOMに反映されないのでasync awaitを使う
    await wrapper.get('.inc').trigger('click')
    const contain = wrapper.find('[data-cy="countCheck"]').text()
    expect(contain).toContain('Count is: 1')
  })
  it('click button count down', async () => {
    await wrapper.get('.dec').trigger('click')
    expect(wrapper.find('[data-cy="countCheck"]').text()).toContain(
      'Count is: 0'
    )
  })
})
