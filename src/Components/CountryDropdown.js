import React from 'react';
import '../styles/css/compCss/signin.css'

function CountryDropdown(props) {
    return (
        <div className='input-container'>
            <label className='input-label'>Country</label>

            <select defaultValue='South Africa' className='form-control text-input select-box' id="country" name="country">
                <option className='text-input' value="Afghanistan">Afghanistan</option>
                <option className='text-input' value="Åland Islands">Åland Islands</option>
                <option className='text-input' value="Albania">Albania</option>
                <option className='text-input' value="Algeria">Algeria</option>
                <option className='text-input' value="American Samoa">American Samoa</option>
                <option className='text-input' value="Andorra">Andorra</option>
                <option className='text-input' value="Angola">Angola</option>
                <option className='text-input' value="Anguilla">Anguilla</option>
                <option className='text-input' value="Antarctica">Antarctica</option>
                <option className='text-input' value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option className='text-input' value="Argentina">Argentina</option>
                <option className='text-input' value="Armenia">Armenia</option>
                <option className='text-input' value="Aruba">Aruba</option>
                <option className='text-input' value="Australia">Australia</option>
                <option className='text-input' value="Austria">Austria</option>
                <option className='text-input' value="Azerbaijan">Azerbaijan</option>
                <option className='text-input' value="Bahamas">Bahamas</option>
                <option className='text-input' value="Bahrain">Bahrain</option>
                <option className='text-input' value="Bangladesh">Bangladesh</option>
                <option className='text-input' value="Barbados">Barbados</option>
                <option className='text-input' value="Belarus">Belarus</option>
                <option className='text-input' value="Belgium">Belgium</option>
                <option className='text-input' value="Belize">Belize</option>
                <option className='text-input' value="Benin">Benin</option>
                <option className='text-input' value="Bermuda">Bermuda</option>
                <option className='text-input' value="Bhutan">Bhutan</option>
                <option className='text-input' value="Bolivia">Bolivia</option>
                <option className='text-input' value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option className='text-input' value="Botswana">Botswana</option>
                <option className='text-input' value="Bouvet Island">Bouvet Island</option>
                <option className='text-input' value="Brazil">Brazil</option>
                <option className='text-input' value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option className='text-input' value="Brunei Darussalam">Brunei Darussalam</option>
                <option className='text-input' value="Bulgaria">Bulgaria</option>
                <option className='text-input' value="Burkina Faso">Burkina Faso</option>
                <option className='text-input' value="Burundi">Burundi</option>
                <option className='text-input' value="Cambodia">Cambodia</option>
                <option className='text-input' value="Cameroon">Cameroon</option>
                <option className='text-input' value="Canada">Canada</option>
                <option className='text-input' value="Cape Verde">Cape Verde</option>
                <option className='text-input' value="Cayman Islands">Cayman Islands</option>
                <option className='text-input' value="Central African Republic">Central African Republic</option>
                <option className='text-input' value="Chad">Chad</option>
                <option className='text-input' value="Chile">Chile</option>
                <option className='text-input' value="China">China</option>
                <option className='text-input' value="Christmas Island">Christmas Island</option>
                <option className='text-input' value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option className='text-input' value="Colombia">Colombia</option>
                <option className='text-input' value="Comoros">Comoros</option>
                <option className='text-input' value="Congo">Congo</option>
                <option className='text-input' value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option className='text-input' value="Cook Islands">Cook Islands</option>
                <option className='text-input' value="Costa Rica">Costa Rica</option>
                <option className='text-input' value="Cote D'ivoire">Cote D'ivoire</option>
                <option className='text-input' value="Croatia">Croatia</option>
                <option className='text-input' value="Cuba">Cuba</option>
                <option className='text-input' value="Cyprus">Cyprus</option>
                <option className='text-input' value="Czech Republic">Czech Republic</option>
                <option className='text-input' value="Denmark">Denmark</option>
                <option className='text-input' value="Djibouti">Djibouti</option>
                <option className='text-input' value="Dominica">Dominica</option>
                <option className='text-input' value="Dominican Republic">Dominican Republic</option>
                <option className='text-input' value="Ecuador">Ecuador</option>
                <option className='text-input' value="Egypt">Egypt</option>
                <option className='text-input' value="El Salvador">El Salvador</option>
                <option className='text-input' value="Equatorial Guinea">Equatorial Guinea</option>
                <option className='text-input' value="Eritrea">Eritrea</option>
                <option className='text-input' value="Estonia">Estonia</option>
                <option className='text-input' value="Ethiopia">Ethiopia</option>
                <option className='text-input' value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option className='text-input' value="Faroe Islands">Faroe Islands</option>
                <option className='text-input' value="Fiji">Fiji</option>
                <option className='text-input' value="Finland">Finland</option>
                <option className='text-input' value="France">France</option>
                <option className='text-input' value="French Guiana">French Guiana</option>
                <option className='text-input' value="French Polynesia">French Polynesia</option>
                <option className='text-input' value="French Southern Territories">French Southern Territories</option>
                <option className='text-input' value="Gabon">Gabon</option>
                <option className='text-input' value="Gambia">Gambia</option>
                <option className='text-input' value="Georgia">Georgia</option>
                <option className='text-input' value="Germany">Germany</option>
                <option className='text-input' value="Ghana">Ghana</option>
                <option className='text-input' value="Gibraltar">Gibraltar</option>
                <option className='text-input' value="Greece">Greece</option>
                <option className='text-input' value="Greenland">Greenland</option>
                <option className='text-input' value="Grenada">Grenada</option>
                <option className='text-input' value="Guadeloupe">Guadeloupe</option>
                <option className='text-input' value="Guam">Guam</option>
                <option className='text-input' value="Guatemala">Guatemala</option>
                <option className='text-input' value="Guernsey">Guernsey</option>
                <option className='text-input' value="Guinea">Guinea</option>
                <option className='text-input' value="Guinea-bissau">Guinea-bissau</option>
                <option className='text-input' value="Guyana">Guyana</option>
                <option className='text-input' value="Haiti">Haiti</option>
                <option className='text-input' value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option className='text-input' value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option className='text-input' value="Honduras">Honduras</option>
                <option className='text-input' value="Hong Kong">Hong Kong</option>
                <option className='text-input' value="Hungary">Hungary</option>
                <option className='text-input' value="Iceland">Iceland</option>
                <option className='text-input' value="India">India</option>
                <option className='text-input' value="Indonesia">Indonesia</option>
                <option className='text-input' value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option className='text-input' value="Iraq">Iraq</option>
                <option className='text-input' value="Ireland">Ireland</option>
                <option className='text-input' value="Isle of Man">Isle of Man</option>
                <option className='text-input' value="Israel">Israel</option>
                <option className='text-input' value="Italy">Italy</option>
                <option className='text-input' value="Jamaica">Jamaica</option>
                <option className='text-input' value="Japan">Japan</option>
                <option className='text-input' value="Jersey">Jersey</option>
                <option className='text-input' value="Jordan">Jordan</option>
                <option className='text-input' value="Kazakhstan">Kazakhstan</option>
                <option className='text-input' value="Kenya">Kenya</option>
                <option className='text-input' value="Kiribati">Kiribati</option>
                <option className='text-input' value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option className='text-input' value="Korea, Republic of">Korea, Republic of</option>
                <option className='text-input' value="Kuwait">Kuwait</option>
                <option className='text-input' value="Kyrgyzstan">Kyrgyzstan</option>
                <option className='text-input' value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option className='text-input' value="Latvia">Latvia</option>
                <option className='text-input' value="Lebanon">Lebanon</option>
                <option className='text-input' value="Lesotho">Lesotho</option>
                <option className='text-input' value="Liberia">Liberia</option>
                <option className='text-input' value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option className='text-input' value="Liechtenstein">Liechtenstein</option>
                <option className='text-input' value="Lithuania">Lithuania</option>
                <option className='text-input' value="Luxembourg">Luxembourg</option>
                <option className='text-input' value="Macao">Macao</option>
                <option className='text-input' value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option className='text-input' value="Madagascar">Madagascar</option>
                <option className='text-input' value="Malawi">Malawi</option>
                <option className='text-input' value="Malaysia">Malaysia</option>
                <option className='text-input' value="Maldives">Maldives</option>
                <option className='text-input' value="Mali">Mali</option>
                <option className='text-input' value="Malta">Malta</option>
                <option className='text-input' value="Marshall Islands">Marshall Islands</option>
                <option className='text-input' value="Martinique">Martinique</option>
                <option className='text-input' value="Mauritania">Mauritania</option>
                <option className='text-input' value="Mauritius">Mauritius</option>
                <option className='text-input' value="Mayotte">Mayotte</option>
                <option className='text-input' value="Mexico">Mexico</option>
                <option className='text-input' value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option className='text-input' value="Moldova, Republic of">Moldova, Republic of</option>
                <option className='text-input' value="Monaco">Monaco</option>
                <option className='text-input' value="Mongolia">Mongolia</option>
                <option className='text-input' value="Montenegro">Montenegro</option>
                <option className='text-input' value="Montserrat">Montserrat</option>
                <option className='text-input' value="Morocco">Morocco</option>
                <option className='text-input' value="Mozambique">Mozambique</option>
                <option className='text-input' value="Myanmar">Myanmar</option>
                <option className='text-input' value="Namibia">Namibia</option>
                <option className='text-input' value="Nauru">Nauru</option>
                <option className='text-input' value="Nepal">Nepal</option>
                <option className='text-input' value="Netherlands">Netherlands</option>
                <option className='text-input' value="Netherlands Antilles">Netherlands Antilles</option>
                <option className='text-input' value="New Caledonia">New Caledonia</option>
                <option className='text-input' value="New Zealand">New Zealand</option>
                <option className='text-input' value="Nicaragua">Nicaragua</option>
                <option className='text-input' value="Niger">Niger</option>
                <option className='text-input' value="Nigeria">Nigeria</option>
                <option className='text-input' value="Niue">Niue</option>
                <option className='text-input' value="Norfolk Island">Norfolk Island</option>
                <option className='text-input' value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option className='text-input' value="Norway">Norway</option>
                <option className='text-input' value="Oman">Oman</option>
                <option className='text-input' value="Pakistan">Pakistan</option>
                <option className='text-input' value="Palau">Palau</option>
                <option className='text-input' value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option className='text-input' value="Panama">Panama</option>
                <option className='text-input' value="Papua New Guinea">Papua New Guinea</option>
                <option className='text-input' value="Paraguay">Paraguay</option>
                <option className='text-input' value="Peru">Peru</option>
                <option className='text-input' value="Philippines">Philippines</option>
                <option className='text-input' value="Pitcairn">Pitcairn</option>
                <option className='text-input' value="Poland">Poland</option>
                <option className='text-input' value="Portugal">Portugal</option>
                <option className='text-input' value="Puerto Rico">Puerto Rico</option>
                <option className='text-input' value="Qatar">Qatar</option>
                <option className='text-input' value="Reunion">Reunion</option>
                <option className='text-input' value="Romania">Romania</option>
                <option className='text-input' value="Russian Federation">Russian Federation</option>
                <option className='text-input' value="Rwanda">Rwanda</option>
                <option className='text-input' value="Saint Helena">Saint Helena</option>
                <option className='text-input' value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option className='text-input' value="Saint Lucia">Saint Lucia</option>
                <option className='text-input' value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option className='text-input' value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option className='text-input' value="Samoa">Samoa</option>
                <option className='text-input' value="San Marino">San Marino</option>
                <option className='text-input' value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option className='text-input' value="Saudi Arabia">Saudi Arabia</option>
                <option className='text-input' value="Senegal">Senegal</option>
                <option className='text-input' value="Serbia">Serbia</option>
                <option className='text-input' value="Seychelles">Seychelles</option>
                <option className='text-input' value="Sierra Leone">Sierra Leone</option>
                <option className='text-input' value="Singapore">Singapore</option>
                <option className='text-input' value="Slovakia">Slovakia</option>
                <option className='text-input' value="Slovenia">Slovenia</option>
                <option className='text-input' value="Solomon Islands">Solomon Islands</option>
                <option className='text-input' value="Somalia">Somalia</option>
                <option className='text-input' value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option className='text-input' value="Spain">Spain</option>
                <option className='text-input' value="Sri Lanka">Sri Lanka</option>
                <option className='text-input' value="Sudan">Sudan</option>
                <option className='text-input' value="Suriname">Suriname</option>
                <option className='text-input' value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option className='text-input' value="Swaziland">Swaziland</option>
                <option className='text-input' value="Sweden">Sweden</option>
                <option className='text-input' value="Switzerland">Switzerland</option>
                <option className='text-input' value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option className='text-input' value="Taiwan">Taiwan</option>
                <option className='text-input' value="Tajikistan">Tajikistan</option>
                <option className='text-input' value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option className='text-input' value="Thailand">Thailand</option>
                <option className='text-input' value="Timor-leste">Timor-leste</option>
                <option className='text-input' value="Togo">Togo</option>
                <option className='text-input' value="Tokelau">Tokelau</option>
                <option className='text-input' value="Tonga">Tonga</option>
                <option className='text-input' value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option className='text-input' value="Tunisia">Tunisia</option>
                <option className='text-input' value="Turkey">Turkey</option>
                <option className='text-input' value="Turkmenistan">Turkmenistan</option>
                <option className='text-input' value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option className='text-input' value="Tuvalu">Tuvalu</option>
                <option className='text-input' value="Uganda">Uganda</option>
                <option className='text-input' value="Ukraine">Ukraine</option>
                <option className='text-input' value="United Arab Emirates">United Arab Emirates</option>
                <option className='text-input' value="United Kingdom">United Kingdom</option>
                <option className='text-input' value="United States">United States</option>
                <option className='text-input' value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option className='text-input' value="Uruguay">Uruguay</option>
                <option className='text-input' value="Uzbekistan">Uzbekistan</option>
                <option className='text-input' value="Vanuatu">Vanuatu</option>
                <option className='text-input' value="Venezuela">Venezuela</option>
                <option className='text-input' value="Viet Nam">Viet Nam</option>
                <option className='text-input' value="Virgin Islands, British">Virgin Islands, British</option>
                <option className='text-input' value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option className='text-input' value="Wallis and Futuna">Wallis and Futuna</option>
                <option className='text-input' value="Western Sahara">Western Sahara</option>
                <option className='text-input' value="Yemen">Yemen</option>
                <option className='text-input' value="Zambia">Zambia</option>
                <option className='text-input' value="Zimbabwe">Zimbabwe</option>
            </select>


        </div>
    );
}

export default CountryDropdown;