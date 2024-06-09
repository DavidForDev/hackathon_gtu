PGDMP      )        	        |            hackthon    16.2    16.2 (               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    40970    hackthon    DATABASE     �   CREATE DATABASE hackthon WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE hackthon;
                postgres    false            �            1259    41014    course    TABLE     �   CREATE TABLE public.course (
    id integer NOT NULL,
    title character varying,
    description character varying,
    keywords jsonb
);
    DROP TABLE public.course;
       public         heap    postgres    false            �            1259    41013    course_id_seq    SEQUENCE     �   CREATE SEQUENCE public.course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.course_id_seq;
       public          postgres    false    219                       0    0    course_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.course_id_seq OWNED BY public.course.id;
          public          postgres    false    218            �            1259    41083    course_prog    TABLE     �   CREATE TABLE public.course_prog (
    id integer NOT NULL,
    user_id integer,
    missiondone boolean,
    quizdone boolean,
    course_id integer,
    score integer
);
    DROP TABLE public.course_prog;
       public         heap    postgres    false            �            1259    41082    course_prog_id_seq    SEQUENCE     �   CREATE SEQUENCE public.course_prog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.course_prog_id_seq;
       public          postgres    false    224                       0    0    course_prog_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.course_prog_id_seq OWNED BY public.course_prog.id;
          public          postgres    false    223            �            1259    41008    missions    TABLE     �   CREATE TABLE public.missions (
    title character varying,
    task character varying,
    answer character varying,
    score integer,
    course_id integer,
    id integer NOT NULL
);
    DROP TABLE public.missions;
       public         heap    postgres    false            �            1259    41045    missions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.missions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.missions_id_seq;
       public          postgres    false    217                       0    0    missions_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.missions_id_seq OWNED BY public.missions.id;
          public          postgres    false    222            �            1259    41032    quizz    TABLE     �   CREATE TABLE public.quizz (
    id integer NOT NULL,
    course_id integer,
    question character varying,
    answers jsonb,
    score integer
);
    DROP TABLE public.quizz;
       public         heap    postgres    false            �            1259    41031    quizz_id_seq    SEQUENCE     �   CREATE SEQUENCE public.quizz_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.quizz_id_seq;
       public          postgres    false    221                       0    0    quizz_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.quizz_id_seq OWNED BY public.quizz.id;
          public          postgres    false    220            �            1259    40972    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying,
    email character varying,
    password character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    40971    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    216                       0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    215            g           2604    41017 	   course id    DEFAULT     f   ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_id_seq'::regclass);
 8   ALTER TABLE public.course ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            i           2604    41086    course_prog id    DEFAULT     p   ALTER TABLE ONLY public.course_prog ALTER COLUMN id SET DEFAULT nextval('public.course_prog_id_seq'::regclass);
 =   ALTER TABLE public.course_prog ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            f           2604    41046    missions id    DEFAULT     j   ALTER TABLE ONLY public.missions ALTER COLUMN id SET DEFAULT nextval('public.missions_id_seq'::regclass);
 :   ALTER TABLE public.missions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    217            h           2604    41035    quizz id    DEFAULT     d   ALTER TABLE ONLY public.quizz ALTER COLUMN id SET DEFAULT nextval('public.quizz_id_seq'::regclass);
 7   ALTER TABLE public.quizz ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            e           2604    40975    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    41014    course 
   TABLE DATA           B   COPY public.course (id, title, description, keywords) FROM stdin;
    public          postgres    false    219   �)                 0    41083    course_prog 
   TABLE DATA           [   COPY public.course_prog (id, user_id, missiondone, quizdone, course_id, score) FROM stdin;
    public          postgres    false    224   �*                 0    41008    missions 
   TABLE DATA           M   COPY public.missions (title, task, answer, score, course_id, id) FROM stdin;
    public          postgres    false    217   �*       
          0    41032    quizz 
   TABLE DATA           H   COPY public.quizz (id, course_id, question, answers, score) FROM stdin;
    public          postgres    false    221   ',                 0    40972    users 
   TABLE DATA           C   COPY public.users (user_id, username, email, password) FROM stdin;
    public          postgres    false    216   �,                  0    0    course_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.course_id_seq', 1, true);
          public          postgres    false    218                       0    0    course_prog_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.course_prog_id_seq', 1, true);
          public          postgres    false    223                       0    0    missions_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.missions_id_seq', 1, true);
          public          postgres    false    222                       0    0    quizz_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.quizz_id_seq', 1, true);
          public          postgres    false    220                       0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 5, true);
          public          postgres    false    215            o           2606    41021    course course_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.course DROP CONSTRAINT course_pkey;
       public            postgres    false    219            s           2606    41088    course_prog course_prog_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.course_prog
    ADD CONSTRAINT course_prog_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.course_prog DROP CONSTRAINT course_prog_pkey;
       public            postgres    false    224            m           2606    41048    missions missions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.missions
    ADD CONSTRAINT missions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.missions DROP CONSTRAINT missions_pkey;
       public            postgres    false    217            q           2606    41039    quizz quizz_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.quizz
    ADD CONSTRAINT quizz_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.quizz DROP CONSTRAINT quizz_pkey;
       public            postgres    false    221            k           2606    40979    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            t           2606    41040    quizz quizz_course_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.quizz
    ADD CONSTRAINT quizz_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(id);
 D   ALTER TABLE ONLY public.quizz DROP CONSTRAINT quizz_course_id_fkey;
       public          postgres    false    221    219    4719               �   x�M�1O�0��믰���J����[���b�Ҹ;T⿓����������A(���������tQT�))�"�@2i�E�P|�p��Ph�g��W�ʥ�e!|�u
v˱�io��6�߈��d�ܔM��k/|�Jt�6$%�t��4�$��+FX0+��k�\Cz�ٓ�°WJ{��:��$�y���!C���yn3��=�R"n��*A�÷�k4�`�x��~���Iu�����:��
R�
            x�3�4�LBCN#�=... ?�           x���AK�@�ϛ_1� ���C�V,m�F�E�1;��ݲ�	���M�Ih�-���|�&{^C�X/^a�֑i؛� d��u�$��i0䌠��}(,ɂ�J	T�n�X�]�����OI��靰|I7�m�f�8Hx�*'�2��Pv�u�g���{a���k�ne�* a�>mA�3Po{�/�=����ox3�`���qa�n�@�v�n`�G���x��>��(� `Y��	�gJ9ʼ�^��Ś%����_�Kv�W����w36e��{�7P�ϕ      
   �   x����
�@���S������A;.ڊ�:�6��]�D;���U(����?!��%*Q�JGRd�5d�:]���B-��;W��F�=y=�%񆮁)Q*�Z��~F&F	�wT�ʄ��F��1hù�P�H�{��%5$_�ol�».TG��Еe��`�qq�'�L��$�� qk�         h   x�3�LI,�L�%�%�ٙ)U�&&鹉�9z����*FI*�*N�>ᎁ!�%�f�~>�Q�fnz�i���!��N��ަ%��A契��F����i�\1z\\\ �R     