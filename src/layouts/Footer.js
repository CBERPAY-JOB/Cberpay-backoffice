import React, { Fragment } from 'react'
import { Layout, Icon } from 'antd'
import GlobalFooter from '@/components/GlobalFooter'

const { Footer } = Layout
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 偲鲸技术部出品
        </Fragment>
      }
    />
  </Footer>
)
export default FooterView
