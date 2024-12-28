import React from "react";

export const pinIcon = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z" fill="red"/>
    </svg>`;
};

export const circleIcon = ({iconColor}: any) => {
    return `<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" fill="${iconColor || 'red'}" />
    </svg>`;
};

export const pilIcon = ({iconColor}: any) => {
    return `<svg fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path fill="${iconColor || 'red'}" d="M5.601 18.621c-1.952 1.953-1.952 5.119 0 7.072l0.708 0.707c1.952 1.951 5.118 1.951 7.071 0l5.656-5.658-7.778-7.778-5.657 5.657zM12.672 25.693c-1.562 1.562-4.095 1.562-5.656 0l-0.707-0.707c-1.562-1.562-1.562-4.096 0-5.658l4.949-4.949 6.364 6.363-4.95 4.951zM25.4 7.308l-0.707-0.707c-1.952-1.953-5.118-1.953-7.071 0l-5.657 5.656 7.778 7.778 5.657-5.656c1.953-1.953 1.953-5.119 0-7.071z"></path>
</svg>`;
};

export const houseIcon = ({iconColor}: any) => {
    return `<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="15px" height="15px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
	<path fill="#F9EBB2" d="M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2
		V31.411L32.009,7.403L56,31.394V60z"/>
	<polygon fill="${iconColor || 'red'}" points="14,6 18,6 18,12.601 14,16.593 "/>
	<rect x="28" y="48" fill="#F9EBB2" width="8" height="14"/>
	<path fill="${iconColor || 'red'}" d="M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293
		s-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803
		L31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32
		C62,32.552,61.553,33,61,33z"/>
	<g>
		<path fill="${iconColor || 'red'}" d="M63.211,29.789L34.438,1.015c0,0-0.937-1.015-2.43-1.015s-2.376,0.991-2.376,0.991L20,10.604V5
			c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v13.589L0.783,29.783C0.24,30.326,0,31.172,0,32c0,1.656,1.343,3,3,3
			c0.828,0,1.662-0.251,2.205-0.794L6,33.411V60c0,2.211,1.789,4,4,4h44c2.211,0,4-1.789,4-4V33.394l0.804,0.804
			C59.347,34.739,60.172,35,61,35c1.657,0,3-1.343,3-3C64,31.171,63.754,30.332,63.211,29.789z M14,6h4v6.601l-4,3.992V6z M36,62h-8
			V48h8V62z M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2V31.411
			L32.009,7.403L56,31.394V60z M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293
			s-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803
			L31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32
			C62,32.552,61.553,33,61,33z"/>
		<path fill="${iconColor || 'red'}" d="M23,32h-8c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-8
			C24,32.447,23.553,32,23,32z M22,40h-6v-6h6V40z"/>
		<path fill="${iconColor || 'red'}" d="M41,42h8c0.553,0,1-0.447,1-1v-8c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v8
			C40,41.553,40.447,42,41,42z M42,34h6v6h-6V34z"/>
	</g>
	<rect x="28" y="48" fill="#506C7F" width="8" height="14"/>
	<g>
		<rect x="16" y="34" fill="#45AAB8" width="6" height="6"/>
		<rect x="42" y="34" fill="#45AAB8" width="6" height="6"/>
	</g>
</g>
</svg>`;
};

export const schoolIcon = ({iconColor}: any) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"  viewBox="0 0 478.68 478.68" xml:space="preserve" width="20" height="20">
<g id="_x32_8._School_2_">
	<g id="XMLID_76_">
		<g>
			<g>
				<polygon style="fill:#F2D59F;" points="468.68,255.61 468.68,463.15 376.95,463.15 376.95,255.6 468.67,255.6     "/>
			</g>
			<g>
				<polygon style="fill:#8ECAC1;" points="416.91,186.8 468.67,255.6 376.95,255.6 376.95,186.8     "/>
			</g>
			<g>
				<path style="fill:#F2D59F;" d="M376.95,255.6v207.55h-91.74v-100.4h-45.87h-45.87v100.4h-91.74V255.6v-68.8L239.34,118      l137.61,68.8V255.6z M261.92,205.41c0-12.47-10.11-22.58-22.58-22.58s-22.58,10.11-22.58,22.58s10.11,22.58,22.58,22.58      S261.92,217.88,261.92,205.41z"/>
			</g>
			<g>
				<polygon style="fill:#FF7124;" points="326.06,15.53 294.99,41.85 326.06,68.17 239.34,68.17 239.34,15.53     "/>
			</g>
			<g>
				<rect x="239.34" y="362.75" style="fill:#FF7124;" width="45.87" height="100.4"/>
			</g>
			<g>
				<circle style="fill:#E6B263;" cx="239.34" cy="205.41" r="22.58"/>
			</g>
			<g>
				<rect x="193.47" y="362.75" style="fill:#FF7124;" width="45.87" height="100.4"/>
			</g>
			<g>
				<polygon style="fill:#F2D59F;" points="101.73,255.6 101.73,463.15 10,463.15 10,255.61 10.01,255.6     "/>
			</g>
			<g>
				<polygon style="fill:#8ECAC1;" points="101.73,186.8 101.73,255.6 10.01,255.6 61.77,186.8     "/>
			</g>
		</g>
		<g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M376.95,473.15h-91.74c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.74      c5.522,0,10,4.477,10,10C386.95,468.673,382.473,473.15,376.95,473.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M193.47,473.15h-91.74c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.74      c5.522,0,10,4.477,10,10C203.47,468.673,198.992,473.15,193.47,473.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M101.729,473.15H10c-5.523,0-10-4.477-10-10V255.61c0-5.523,4.477-10,10-10      c5.522,0,10,4.477,10,10v197.54h81.729c5.522,0,10,4.477,10,10C111.729,468.673,107.252,473.15,101.729,473.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M101.729,265.6H10.01c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.72      c5.522,0,10,4.477,10,10C111.729,261.122,107.252,265.6,101.729,265.6z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M468.67,265.6h-91.72c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.72      c5.522,0,10,4.477,10,10C478.67,261.122,474.192,265.6,468.67,265.6z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M468.68,473.15H376.95c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h81.729V255.61      c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10v207.54C478.68,468.673,474.202,473.15,468.68,473.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M285.21,472.15h-91.74c-4.971,0-9-4.029-9-9v-100.4c0-4.971,4.029-9,9-9h91.74      c4.971,0,9,4.029,9,9v100.4C294.21,468.121,290.181,472.15,285.21,472.15z M202.47,454.15h73.74v-82.4h-73.74V454.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M55.87,424.57c-5.522,0-10-4.477-10-10V392.6c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C65.87,420.093,61.393,424.57,55.87,424.57z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M422.81,424.57c-5.522,0-10-4.477-10-10V392.6c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C432.81,420.093,428.332,424.57,422.81,424.57z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M55.87,345.09c-5.522,0-10-4.477-10-10v-21.97c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C65.87,340.613,61.393,345.09,55.87,345.09z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M422.81,345.09c-5.522,0-10-4.477-10-10v-21.97c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C432.81,340.613,428.332,345.09,422.81,345.09z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M147.6,394.71c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.96C157.6,390.233,153.122,394.71,147.6,394.71z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M331.08,394.71c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C341.08,390.233,336.603,394.71,331.08,394.71z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M147.6,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.96C157.6,310.753,153.122,315.23,147.6,315.23z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M331.08,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C341.08,310.753,336.603,315.23,331.08,315.23z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M239.34,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C249.34,310.753,244.862,315.23,239.34,315.23z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M468.674,265.607c-2.639,0-5.271-1.039-7.235-3.101c-0.267-0.28-0.527-0.586-0.76-0.895      L411.92,196.8h-34.97c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h39.96c3.143,0,6.102,1.477,7.991,3.988l51.684,68.698      c3.102,4.005,2.733,9.791-1.014,13.36C473.635,264.691,471.151,265.607,468.674,265.607z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M10.001,265.603c-2.478,0-4.958-0.914-6.892-2.756c-3.769-3.589-4.127-9.413-0.969-13.418      l51.639-68.64c1.89-2.511,4.849-3.988,7.991-3.988h39.96c5.522,0,10,4.477,10,10c0,5.523-4.478,10-10,10H66.76l-48.759,64.811      c-0.232,0.309-0.483,0.604-0.75,0.885C15.284,264.561,12.644,265.603,10.001,265.603z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M239.34,472.15c-4.971,0-9-4.029-9-9v-100.4c0-4.971,4.029-9,9-9s9,4.029,9,9v100.4      C248.34,468.121,244.311,472.15,239.34,472.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M376.95,473.15c-5.522,0-10-4.477-10-10V192.98l-127.61-63.8l-127.61,63.8V463.15      c0,5.523-4.478,10-10,10c-5.522,0-10-4.477-10-10V186.8c0-3.788,2.141-7.251,5.528-8.944l137.61-68.8      c2.814-1.407,6.129-1.407,8.943,0l137.61,68.8c3.388,1.694,5.528,5.157,5.528,8.944v276.35      C386.95,468.673,382.473,473.15,376.95,473.15z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M239.34,128c-5.522,0-10-4.477-10-10V68.17c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10V118      C249.34,123.523,244.862,128,239.34,128z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M326.06,78.17h-86.72c-5.522,0-10-4.477-10-10V15.53c0-5.523,4.478-10,10-10h86.72      c4.195,0,7.944,2.619,9.389,6.558c1.444,3.939,0.276,8.361-2.925,11.073l-22.063,18.69l22.063,18.69      c3.201,2.712,4.369,7.134,2.925,11.073C334.004,75.551,330.255,78.17,326.06,78.17z M249.34,58.17h49.444l-10.258-8.69      c-2.243-1.9-3.536-4.69-3.536-7.63c0-2.94,1.293-5.73,3.536-7.63l10.258-8.69H249.34V58.17z"/>
			</g>
			<g>
				<path style="fill:${iconColor || 'red'};" d="M239.34,236.99c-17.413,0-31.58-14.167-31.58-31.58s14.167-31.58,31.58-31.58      s31.58,14.167,31.58,31.58S256.753,236.99,239.34,236.99z M239.34,191.83c-7.488,0-13.58,6.092-13.58,13.58      c0,7.488,6.092,13.58,13.58,13.58s13.58-6.092,13.58-13.58C252.92,197.922,246.828,191.83,239.34,191.83z"/>
			</g>
		</g>
	</g>
</g>
</svg>`;
};

export const arrowUpIcon = () => {
    return `<svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
                <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>`;
};

const arrowDownIcon = () => {
    return `<svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
        </svg>`;
};

export const InfoIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20">
        <g transform="translate(-376 -747)">
            <g transform="translate(376 747)" fill="none" stroke="rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))" strokeWidth="2">
                <circle cx="10" cy="10" r="10" stroke="none"/>
                <circle cx="10" cy="10" r="9" fill="none"/>
            </g>
            <g transform="translate(1879.223 -9641.982) rotate(180)">
                <g transform="translate(1492.199 -10404.029)">
                    <path d="M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z" transform="translate(-5.585 -3.825)" fill="#0067b9"/>
                </g>
                <g transform="translate(1492.016 -10396.144)">
                    <circle cx="1.095" cy="1.095" r="1.095" fill="rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))"/>
                </g>
            </g>
        </g>
    </svg>
        ;
};

export const PersonInfo = () => {
    return <svg width="12" height="12" viewBox="0 0 20 20" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="personIconTitle" stroke="rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000">
        <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20"/>
    </svg>
};

export const EditIcon = () => {
    return <svg className="feather feather-edit"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
};


export const getIcon = (type: string) => {
    switch (type) {
        case 'house':
            return houseIcon;
        case 'school':
            return schoolIcon;
        case 'post':
            return pilIcon;
        case 'pharmacy':
            return pilIcon;
        case 'post and pharmacy':
            return pilIcon;
        case 'arrowUpIcon':
            return arrowUpIcon();
        case 'infoIcon':
            return InfoIcon();
        case 'arrowDownIcon':
            return arrowDownIcon();
        default:
            return circleIcon
    }
};

export const indexedIcon = () => `
<svg width="20px" height="20px" viewBox="0 0 8333 8333">
 <defs>
  <style type="text/css">
    .fil0 {fill:green}
    .fil1 {fill: green}
  </style>
 </defs>
 <g>
  <path class="fil0" d="M5997 7722l-5253 0c-66,0 -121,-54 -121,-121l0 -6869c0,-67 55,-121 121,-121l5034 0c66,0 120,54 120,121 0,67 -54,121 -120,121l-4913 0 0 6628 5011 0 0 -1242c0,-66 54,-120 121,-120 67,0 121,54 121,120l0 1362c0,67 -54,121 -121,121z"/>
  <path class="fil1" d="M3600 1589l-1580 0c-67,0 -121,-54 -121,-121 0,-67 54,-121 121,-121l1580 0c67,0 121,54 121,121 0,67 -54,121 -121,121z"/>
  <path class="fil1" d="M3590 2263l-2200 0c-67,0 -121,-54 -121,-120 0,-67 54,-121 121,-121l2200 0c67,0 121,54 121,121 0,66 -55,120 -121,120z"/>
  <path class="fil1" d="M3478 2938l-2088 0c-67,0 -121,-54 -121,-121 0,-66 54,-120 121,-120l2088 0c66,0 120,54 120,120 0,67 -54,121 -120,121z"/>
  <path class="fil1" d="M3593 3613l-2203 0c-67,0 -121,-54 -121,-121 0,-67 54,-121 121,-121l2203 0c67,0 121,54 121,121 0,67 -54,121 -121,121z"/>
  <path class="fil1" d="M3935 4287l-2545 0c-67,0 -121,-54 -121,-120 0,-67 54,-121 121,-121l2545 0c66,0 120,54 120,121 0,66 -54,120 -120,120z"/>
  <path class="fil1" d="M4806 4962l-3416 0c-67,0 -121,-54 -121,-121 0,-66 54,-120 121,-120l3416 0c66,0 120,54 120,120 0,67 -54,121 -120,121z"/>
  <path class="fil1" d="M4882 5637l-1196 0c-67,0 -121,-54 -121,-121 0,-67 54,-121 121,-121l1196 0c67,0 121,54 121,121 0,67 -54,121 -121,121z"/>
  <path class="fil1" d="M3053 6986l-1663 0c-67,0 -121,-54 -121,-121l0 -1349c0,-67 54,-121 121,-121l1663 0c67,0 121,54 121,121l0 1349c0,67 -54,121 -121,121zm-1543 -241l1423 0 0 -1108 -1423 0 0 1108z"/>
  <path class="fil1" d="M5293 6986l-1825 0c-67,0 -121,-54 -121,-121 0,-66 54,-120 121,-120l1825 0c67,0 121,54 121,120 0,67 -54,121 -121,121z"/>
  <path class="fil1" d="M4882 6311l-1414 0c-67,0 -121,-54 -121,-120 0,-67 54,-121 121,-121l1414 0c67,0 121,54 121,121 0,66 -54,120 -121,120z"/>
  <path class="fil1" d="M1390 6986c-36,0 -70,-15 -94,-45 -42,-51 -34,-127 17,-169l1664 -1350c52,-42 128,-34 170,18 42,52 34,128 -18,170l-1663 1349c-23,18 -50,27 -76,27z"/>
  <path class="fil1" d="M3053 6986c-26,0 -53,-9 -76,-27l-1664 -1349c-51,-42 -59,-118 -17,-170 42,-52 118,-60 170,-18l1663 1350c52,42 60,118 18,169 -24,30 -59,45 -94,45z"/>
  <path class="fil0" d="M5778 4476c-1066,0 -1933,-867 -1933,-1933 0,-1065 867,-1932 1933,-1932 1065,0 1932,867 1932,1932 0,1066 -867,1933 -1932,1933zm0 -3623c-933,0 -1691,758 -1691,1690 0,933 758,1691 1691,1691 932,0 1690,-758 1690,-1691 0,-932 -758,-1690 -1690,-1690z"/>
  <path class="fil1" d="M5778 4023c-816,0 -1480,-664 -1480,-1480 0,-815 664,-1479 1480,-1479 815,0 1479,664 1479,1479 0,816 -664,1480 -1479,1480zm0 -2717c-683,0 -1238,555 -1238,1237 0,683 555,1238 1238,1238 682,0 1237,-555 1237,-1238 0,-682 -555,-1237 -1237,-1237z"/>
  <path class="fil0" d="M6194 6360l-833 0c-67,0 -121,-54 -121,-121l0 -1195c0,-67 54,-121 121,-121l833 0c67,0 121,54 121,121l0 1195c0,67 -54,121 -121,121zm-712 -241l591 0 0 -954 -591 0 0 954 0 0z"/>
  <path class="fil0" d="M5778 5165c-67,0 -121,-54 -121,-121l0 -689c0,-67 54,-121 121,-121 66,0 120,54 120,121l0 689c0,67 -54,121 -120,121z"/>
 </g>
</svg>

`