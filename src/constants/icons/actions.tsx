export type ActionsIconID =
  | 'outline-search'
  | 'outline-write'
  | 'iconset-chevron-left'
  | 'iconset-arrow-up-right'
  | 'iconset-more';

export const actionsSymbols = (
  <>
    {/* outline-search */}
    <symbol
      id="outline-search"
      viewBox="0 0 24 24"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2Z"
        fill="currentFill"
      />
    </symbol>

    {/* outline-write */}
    <symbol
      id="outline-write"
      viewBox="0 0 24 24"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4142 3.99997C15.6332 3.21892 14.3668 3.21892 13.5858 3.99997L5.58579 12C5.21071 12.375 5 12.8838 5 13.4142V15C5 16.1045 5.89543 17 7 17H8.58579C9.11622 17 9.62493 16.7893 10 16.4142L18 8.41418C18.7811 7.63313 18.781 6.3668 18 5.58576L16.4142 3.99997ZM7 13.4142L15 5.41418L16.5858 6.99997L8.58579 15H7L7 13.4142ZM4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H4Z"
        fill="currentFill"
      />
    </symbol>

    {/* iconset-chevron-left */}
    <symbol
      id="iconset-chevron-left"
      viewBox="0 0 24 24"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="currentStroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </symbol>

    {/* iconset-arrow-up-right */}
    <symbol
      id="iconset-arrow-up-right"
      viewBox="0 0 24 24"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.29288 16.2929C5.90236 16.6834 5.90236 17.3166 6.29288 17.7071C6.68341 18.0976 7.31657 18.0976 7.7071 17.7071L16 9.41422L16 16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16L18 7.0031C18 7.00103 18 6.99897 18 6.99691V6L17.0004 6L17 6L16.9996 6L8 6C7.44771 6 7 6.44772 7 7C7 7.55229 7.44771 8 8 8L14.5858 8L6.29288 16.2929Z"
        fill="currentFill"
      />
    </symbol>

    {/* iconset-more */}
    <symbol
      id="iconset-more"
      viewBox="0 0 24 24"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="2"
        transform="rotate(90 12 12)"
        fill="currentFill"
      />
      <circle
        cx="12"
        cy="5"
        r="2"
        transform="rotate(90 12 5)"
        fill="currentFill"
      />
      <circle
        cx="12"
        cy="19"
        r="2"
        transform="rotate(90 12 19)"
        fill="currentFill"
      />
    </symbol>
  </>
);
