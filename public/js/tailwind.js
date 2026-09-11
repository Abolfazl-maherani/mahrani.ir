tailwind.config = {
    theme: {
        container:{
            center: true,
            padding:'15px',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
                '2xl': '1240px',
            },
        },
        extend: {
            colors: {
                primary: '#304CFD',
            },
            boxShadow: {
                'custom-1': '0 2.5rem 3.125rem rgba(103, 118, 128, 0.1) !important',
                'button':'0 0.5rem 1rem rgba(48, 76, 253, 0.15), 0 0.125rem 0.25rem rgba(48, 76, 253, 0.15)'
            }
        }
    }
}