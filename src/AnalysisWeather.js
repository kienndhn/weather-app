export function AnalysisWeather(TempRoom,HumiRoom,TempOutside,HumiOutSide){
    var x=TempOutside*1.8 + 32 , y = HumiOutSide;
    var c1=16.923,c2=0.185212,c3=5.37941,c4=-0.100254,c5=9.41695*Math.pow(10,-3)
    ,c6=7.28898*Math.pow(10,-3),c7=3.45372*Math.pow(10,-4),c8=-8.14971*Math.pow(10,-4),
    c9=1.02102*Math.pow(10,-5),c10=-3.8646*Math.pow(10,-5),c11=2.91583*Math.pow(10,-5),
    c12=1.42721*Math.pow(10,-6),c13=1.97483*Math.pow(10,-7),c14=-2.18429*Math.pow(10,-8),c15=8.43296*Math.pow(10,-10),c16=-4.81975*Math.pow(10,-11);
    var HI=(c1+ x*c2 + y*c3 + x*y*c4 + x*x*c5 + y*y*c6 + x*x*y*c7 + x*y*y*c8 + x*x*y*y*c9 + x*x*x*c10 
    + y*y*y*c11 + x*x*x*y*c12 + x*y*y*y*c13 + x*x*x*y*y*c14 + x*x*y*y*y*c15 + x*x*x*y*y*y*c16 - 32)/1.8;
    let message="";
    //th1
    if(TempRoom>=34 && HumiRoom >=80 && HI <30){
    message="Nhiệt độ và độ ẩm trong phòng đang ở mức rất cao bạn nên bật điều hòa hoặc ra khỏi phòng vì bên ngoài không khí đang rất tốt";
    }
    else if(TempRoom>=34 && HumiRoom >=70 && HumiRoom <80 && HI <30){
        message="Nhiệt độ và độ ẩm đang cao bạn nên bật điều hòa để giúp không khí căn phòng tốt hơn hoặc ra ngoài hít thở không khí trong lành";
    }
    else if(TempRoom>=34 && HumiRoom >=40 && HumiRoom <70  && HI <30){
        message="Trong phòng đang nóng bạn nên bật quạt hoặc điều hòa để căn phòng mát hơn hoặc bạn nên ra ngoài vận động một chút";
    }
    else if(TempRoom>=34 && HumiRoom <40 && HI <30){
        message="Nhiệt độ cao và độ ẩm thấp bạn không nên ở quá lâu trong phòng, ngoài trời đang rất đẹp bạn nên ra đó";
    }
    else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=80 && HI <30){
        message="Nhiệt độ  đang ở mức hợp lý và độ ẩm đang cao bạn nên bật máy hút ẩm và cẩn thận sàn nhà bị ướt";
    }
    else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=70 && HumiRoom <80 && HI <30){
        message="Nhiệt độ và độ ẩm đang ở mức hợp lý nếu ngoài trời không mưa nên mở cửa sổ ra";
    }
    else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=40 && HumiRoom <70 && HI <30){
        message="Nhiệt độ và độ ẩm đang ở mức phù hợp bạn nên mở cửa sổ để căn phòng thông thoáng hơn";
    }
    else if(TempRoom>=28 && TempRoom<34 && HumiRoom <40 && HI <30){
        message="Trong phòng không khí đang khô có thể gây ra ngứa hoặc khô da, bạn nên ra ngoài để tốt hơn";
    }
    else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=80 && HI <30){
        message="Độ ẩm đang cao cần giảm xuống để tránh mạt bụi phát triển, bạn nên mở cửa ra cho phòng thông thoáng";
    }
    else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=70 && HumiRoom <80 && HI <30){
        message="Nhiệt độ tốt nhưng không trong phòng ẩm ướt nếu ở lâu có thể bị bệnh liên quan đến hô hấp,bạn nên ra ngoài trời vận động để khỏe hơn ";
    }
    else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=40 && HumiRoom <70 && HI <30){
        message="Nhiệt độ và độ ẩm đang ở mức tốt chúc bạn một ngày tốt lành";
    }
    else if(TempRoom>=19 && TempRoom<28 && HumiRoom <40 && HI <30){
        message="Nhiệt trong phòng đang rất thoải mái nhưng độ ẩm thấp bạn nên để thêm 1 chút nước trong phòng hoặc ra ngoài hít thở không khí sẽ giúp bạn thoải mái hơn";
    }
    else if(TempRoom<19 && HumiRoom >=80 && HI <30){
        message="Độ ẩm cao cẩn thận trơn trượt trên sàn nhà mở cửa ra để cho phòng thông thoáng";
    }
    else if(TempRoom<19 && HumiRoom >=70 && HumiRoom <80 && HI <30){
        message="Nhiệt độ thấp và độ ẩm  cao bạn nên bật điều hòa để căn phòng ấm hơn hoặc ra bên ngoài vui chơi";
    }
    else if(TempRoom<19 && HumiRoom >=40 && HumiRoom <70 && HI <30){
        message="Trong phòng đang lạnh bạn nên bật thêm điều hòa hoặc máy sưởi, ngoài trời đang thoải mái bạn nên ra ngoài";
    }
    //th2
        else if(TempRoom>=34 && HumiRoom >=80 && HI >30 && HI <45){
        message="Nhiệt độ và độ ẩm trong phòng đang ở mức rất cao bạn nên bật điều hòa hoặc ra khỏi phòng, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=34 && HumiRoom >=70 && HumiRoom <80 && HI >30 && HI <45){
            message="Nhiệt độ và độ ẩm đang cao bạn nên bật điều hòa để giúp không khí căn phòng tốt hơn, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=34 && HumiRoom >=40 && HumiRoom <70 && HI >30 && HI <45){
            message="Trong phòng đang nóng bạn nên bật quạt hoặc điều hòa để căn phòng mát hơn, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=34 && HumiRoom <40 && HI >30 && HI <45){
            message="Nhiệt độ cao và độ ẩm thấp bạn không nên ở quá lâu trong phòng, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=80 && HI >30 && HI <45){
            message="Nhiệt độ  đang ở mức hợp lý và độ ẩm đang cao bạn nên bật máy hút ẩm, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=70 && HumiRoom <80 && HI >30 && HI <45){
            message="Nhiệt độ và độ ẩm đang ở mức hợp lý nếu ngoài trời không mưa nên mở cửa sổ ra, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=40 && HumiRoom <70 && HI >30 && HI <45){
            message="Nhiệt độ và độ ẩm đang ở mức phù hợp bạn nên mở cửa sổ để căn phòng thông thoáng hơn, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=28 && TempRoom<34 && HumiRoom <40 && HI >30 && HI <45){
            message="Trong phòng không khí đang khô có thể gây ra ngứa hoặc khô da, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=80 && HI >30 && HI <45){
            message="Độ ẩm đang cao cần giảm xuống để tránh mạt bụi phát triển, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=70 && HumiRoom <80 && HI >30 && HI <45){
            message="Nhiệt độ tốt nhưng không trong phòng ẩm ướt nếu ở lâu có thể bị bệnh liên quan đến hô hấp, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=40 && HumiRoom <70 && HI >30 && HI <45){
            message="Nhiệt độ và độ ẩm đang ở mức tốt chúc bạn một ngày tốt lành, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom>=19 && TempRoom<28 && HumiRoom <40 && HI >30 && HI <45){
            message="Nhiệt trong phòng đang rất thoải mái nhưng độ ẩm thấp bạn nên để thêm 1 chút nước trong phòng, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom<19 && HumiRoom >=80 && HI >30 && HI <45){
            message="Độ ẩm cao cẩn thận trơn trượt trên sàn nhà, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom<19 && HumiRoom >=70 && HumiRoom <80 && HI >30 && HI <45){
            message="Nhiệt độ thấp và độ ẩm  cao bạn nên bật điều hòa để căn phòng ấm hơn, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        else if(TempRoom<19 && HumiRoom >=40 && HumiRoom <70 && HI >30 && HI <45){
            message="Trong phòng đang lạnh bạn nên bật thêm điều hòa hoặc máy sưởi, ngoài trời thời tiết gây khó chịu nếu không có việc thì không nên ra ngoài";
        }
        //th3
            else if(TempRoom>=34 && HumiRoom >=80 && HI >45){
            message="Nhiệt độ và độ ẩm trong phòng đang ở mức rất cao bạn nên bật điều hòa hoặc ra khỏi phòng, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=34 && HumiRoom >=70 && HumiRoom <80 && HI >45){
                message="Nhiệt độ và độ ẩm đang cao bạn nên bật điều hòa để giúp không khí căn phòng tốt hơn, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=34 && HumiRoom >=40 && HumiRoom <70 && HI >45){
                message="Trong phòng đang nóng bạn nên bật quạt hoặc điều hòa để căn phòng mát hơn, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=34 && HumiRoom <40 && HI >45){
                message="Nhiệt độ cao và độ ẩm thấp bạn không nên ở quá lâu trong phòng, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=80 && HI >45){
                message="Nhiệt độ  đang ở mức hợp lý và độ ẩm đang cao bạn nên bật máy hút ẩm, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=70 && HumiRoom <80 && HI >45){
                message="Nhiệt độ và độ ẩm đang ở mức hợp lý nếu ngoài trời không mưa nên mở cửa sổ ra, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=28 && TempRoom<34 && HumiRoom >=40 && HumiRoom <70 && HI >45){
                message="Nhiệt độ và độ ẩm đang ở mức phù hợp bạn nên mở cửa sổ để căn phòng thông thoáng hơn, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=28 && TempRoom<34 && HumiRoom <40 && HI >45){
                message="Trong phòng không khí đang khô có thể gây ra ngứa hoặc khô da, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=80 && HI >45){
                message="Độ ẩm đang cao cần giảm xuống để tránh mạt bụi phát triển, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=70 && HumiRoom <80 && HI >45){
                message="Nhiệt độ tốt nhưng không trong phòng ẩm ướt nếu ở lâu có thể bị bệnh liên quan đến hô hấp, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=19 && TempRoom<28 && HumiRoom >=40 && HumiRoom <70 && HI >45){
                message="Nhiệt độ và độ ẩm đang ở mức tốt chúc bạn một ngày tốt lành, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom>=19 && TempRoom<28 && HumiRoom <40 && HI >45){
                message="Nhiệt trong phòng đang rất thoải mái nhưng độ ẩm thấp bạn nên để thêm 1 chút nước trong phòng, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom<19 && HumiRoom >=80 && HI >45){
                message="Độ ẩm cao cẩn thận trơn trượt trên sàn nhà, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom<19 && HumiRoom >=70 && HumiRoom <80 && HI >45){
                message="Nhiệt độ thấp và độ ẩm  cao bạn nên bật điều hòa để căn phòng ấm hơn, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
            else if(TempRoom<19 && HumiRoom >=40 && HumiRoom <70 && HI >45){
                message="Trong phòng đang lạnh bạn nên bật thêm điều hòa hoặc máy sưởi, bên ngoài thời tiết đang ở mức nguy hiểm không ra ngoài sẽ tốt hơn";
            }
    return message;
    }