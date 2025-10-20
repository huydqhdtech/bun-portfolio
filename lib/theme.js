import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('white', '#1A1A1A')(props),
      color: mode('#2D3748', '#E2E8F0')(props),
      fontFamily:
        "'Nunito', 'Comic Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    '*': {
      scrollBehavior: 'smooth'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: { base: '2xl', md: '3xl' },
        fontWeight: '800',
        color: mode('#2D3748', '#E2E8F0'),
        marginTop: 8,
        marginBottom: 6,
        position: 'relative',
        fontFamily: "'Nunito', sans-serif",
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: 0,
          width: '60px',
          height: '4px',
          background: '#FFFFFF',
          borderRadius: '20px'
        }
      },
      'page-title': {
        fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
        fontWeight: '900',
        color: mode('#1A202C', '#F7FAFC'),
        lineHeight: '1.1',
        fontFamily: "'Nunito', sans-serif"
      }
    }
  },
  Button: {
    variants: {
      'gradient-primary': {
        background: '#2D3748',
        color: 'white',
        fontWeight: '700',
        borderRadius: '25px',
        px: 8,
        py: 6,
        fontFamily: "'Nunito', sans-serif",
        fontSize: 'lg',
        _hover: {
          background: '#1A202C',
          transform: 'translateY(-3px) scale(1.05)',
          boxShadow: '0 15px 35px rgba(45, 55, 72, 0.4)'
        },
        _active: {
          transform: 'translateY(-1px) scale(1.02)'
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      'outline-elegant': {
        border: '3px solid',
        borderColor: '#FFFFFF',
        color: '#FFFFFF',
        background: 'transparent',
        fontWeight: '700',
        borderRadius: '25px',
        px: 8,
        py: 6,
        fontFamily: "'Nunito', sans-serif",
        fontSize: 'lg',
        _hover: {
          background: '#FFFFFF',
          color: 'white',
          transform: 'translateY(-3px) scale(1.05)',
          boxShadow: '0 15px 35px rgba(74, 85, 104, 0.3)',
          borderColor: 'transparent'
        },
        _active: {
          transform: 'translateY(-1px) scale(1.02)'
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#FFFFFF', '#A0AEC0')(props),
      textUnderlineOffset: 3,
      fontWeight: '600',
      _hover: {
        color: mode('#2D3748', '#E2E8F0')(props),
        textDecoration: 'none',
        transform: 'translateY(-1px)'
      },
      transition: 'all 0.2s ease'
    })
  },
  Card: {
    baseStyle: {
      background: mode('rgba(255, 255, 255, 0.9)', 'rgba(26, 26, 26, 0.9)'),
      backdropFilter: 'blur(20px)',
      borderRadius: '3xl',
      border: '2px solid',
      borderColor: mode('rgba(74, 85, 104, 0.1)', 'rgba(160, 174, 192, 0.1)'),
      boxShadow: '0 10px 40px rgba(45, 55, 72, 0.15)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      _hover: {
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: '0 25px 50px rgba(45, 55, 72, 0.25)',
        borderColor: mode('rgba(74, 85, 104, 0.2)', 'rgba(160, 174, 192, 0.2)')
      }
    }
  }
}

const fonts = {
  heading:
    "'Nunito', 'Comic Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Nunito', 'Comic Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}

const colors = {
  brand: {
    purple: '#8B5CF6',
    violet: '#A855F7',
    lavender: '#C084FC',
    pink: '#F472B6',
    light: '#FAF7FF',
    dark: '#4C1D95'
  },
  gradient: {
    primary: 'linear-gradient(135deg, #8B5CF6, #A855F7, #C084FC)',
    secondary: 'linear-gradient(135deg, #C084FC, #F472B6, #FB7185)',
    background: 'linear-gradient(135deg, #FAF7FF, #F3E8FF, #EDE9FE)'
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  disableTransitionOnChange: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
